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
  const navigation = useNavigation();


  const getContatos = async() => {
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

  const formatarNumero = (contatos) => {
    const telefone = contatos?.telefones[0]
    const ddd = telefone?.slice(0, 2)
    const prefixo = telefone?.slice(3, 7)
    const sufixo = telefone?.slice(8, 11)
    return `(${ddd})${prefixo}-${sufixo}`
  }

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
        <Pesquisa placeholder="pesquisar" />
      </Header>

      <Modal visible={isModal} transparent={true} animationType="slide">
        <ModalcriarContato setIsModal={setIsModal} />
      </Modal>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardContato data={item}/>
        )}
      />

    </Container>
  );
}