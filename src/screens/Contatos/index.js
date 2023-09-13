import {
  BotaoAdd,
  BotaoVoltar,
  Container,
  ContainerButtom,
  Header,
  Pesquisa,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Modal, ScrollView, View } from "react-native";
import { CardContato } from "../../components/CardContato";
import { ModalcriarContato } from "../../components/ModalCriarContato";
import { useNavigation } from "@react-navigation/core";
import api from "../../api";


export function Contatos() {
  const [isModal, setIsModal] = useState(false);
  const [contatos, setContatos] = useState();
  const [filtro, setFiltro] = useState("");
  const navigation = useNavigation();

  const filterContatos = () => {
    return contatos?.filter((contato) => {
      const { nome, cargo, praca } = contato;
      const normalizedSearch = filtro.toLowerCase();
      return (
        nome.toLowerCase().includes(normalizedSearch) ||
        praca.toLowerCase().includes(normalizedSearch) ||
        cargo.toLowerCase().includes(normalizedSearch)
      )
    })
  }


  const getContatos = async () => {
    try {
      const res = await api.get('/employees');
      setContatos(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContatos()
  }, [])



  return (
    <Container>
      <Header>
        <ContainerButtom>
          <BotaoVoltar onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </BotaoVoltar>

          <BotaoAdd onPress={() => setIsModal(true)}>
            <Ionicons name="add" size={24} color="white" />
          </BotaoAdd>
        </ContainerButtom>
        <Pesquisa
          value={filtro}
          onChangeText={(text) => setFiltro(text)}
          placeholder="pesquisar" />
      </Header>

      <Modal visible={isModal} transparent={true} animationType="slide">
        <ModalcriarContato setIsModal={setIsModal} />
      </Modal>

      <FlatList
        data={filterContatos()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardContato data={item} />
        )}
      />

    </Container>
  );
}