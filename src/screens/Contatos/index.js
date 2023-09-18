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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Modal, ScrollView, View } from "react-native";
import { CardContato } from "../../components/CardContato";
import { ModalcriarContato } from "../../components/ModalCriarContato";
import { useNavigation } from "@react-navigation/core";
import api from "../../api";

export function Contatos() {
  const [contatos, setContatos] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // Pode ser 'create' ou 'edit'
  const [selectedUser, setSelectedUser] = useState(null); // Usuário selecionado para edição

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
    setIsModalVisible(false); // Fecha o modal após sucesso
    setModalMode("create"); // Define o modo de volta para criação
    setSelectedUser(null); // Limpa o usuário selecionado
    getContatos();
  };

  return (
    <Container>
      <Header>
        <ContainerButtom>
          <BotaoVoltar onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </BotaoVoltar>

          <BotaoAdd onPress={() => {
            setModalMode("create"); 
            setIsModalVisible(true); }}>
            <Ionicons name="add" size={24} color="white" />
          </BotaoAdd>
        </ContainerButtom>
        <Pesquisa
          placeholder="Pesquisar por nome, praça ou cargo"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </Header>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <ModalcriarContato
          mode={modalMode} // Passa o modo para o modal (create ou edit)
          user={selectedUser} // Passa o usuário selecionado para edição (ou null se for criação)
          setIsModal={setIsModalVisible}
          onCadastroSucesso={handleCadastroSucesso}
        />
      </Modal>

      <FlatList
        data={filterContatos()} // Usar a lista filtrada
        keyExtractor={(item) => item.id.toString()} // Usar id.toString() para a chave
        renderItem={({ item }) => (
          <CardContato
            data={item}
            onPress={() => {
              setSelectedUser(item); // Define o usuário selecionado para edição
              setModalMode("edit"); // Define o modo para edição
              setIsModalVisible(true); // Abre o modal de criação/edição
            }}
          />
        )}
      />
    </Container>
  );
}
