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
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  const filterContatos = () => {
    return contatos?.filter((contato) => {
      const { nome, praca, cargo } = contato;
      const normalizedSearch = searchTerm.toLowerCase();

      return (
        nome.toLowerCase().includes(normalizedSearch) ||
        praca.toLowerCase().includes(normalizedSearch) ||
        cargo.toLowerCase().includes(normalizedSearch)
      );
    });
  };

  const getContatos = async () => {
    try {
      const res = await api.get("/employees");
      setContatos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContatos();
  }, []);

  const handleCadastroSucesso = () => {
    getContatos(); // Chamar a função para buscar os contatos novamente após o cadastro bem-sucedido
  };

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
          placeholder="Pesquisar por nome, praça ou cargo"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </Header>

      <Modal visible={isModal} transparent={true} animationType="slide">
        <ModalcriarContato
          setIsModal={setIsModal}
          onCadastroSucesso={handleCadastroSucesso}
        />
      </Modal>

      <FlatList
        data={filterContatos()} // Usar a lista filtrada
        keyExtractor={(item) => item.id.toString()} // Usar id.toString() para a chave
        renderItem={({ item }) => <CardContato data={item} />}
      />
    </Container>
  );
}
