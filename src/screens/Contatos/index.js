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
import { useState } from "react";
import { Modal, View } from "react-native";
import { CardContato } from "../../components/CardContato";
import { ModalcriarContato } from "../../components/ModalCriarContato";

export function Contatos() {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
      <Header>
        <ContainerButtom>
          <BotaoVoltar>
            <AntDesign name="arrowleft" size={24} color="white" />
          </BotaoVoltar>

          <BotaoAdd onPress={() => setIsModal(true)}>
            <Ionicons name="add" size={24} color="white" />
          </BotaoAdd>
        </ContainerButtom>
        <Pesquisa placeholder="pesquisar" />
      </Header>

      <Modal visible={isModal} transparent={true} animationType="slide">
        <ModalcriarContato setIsModal={setIsModal}/>
      </Modal>

      <CardContato />
    </Container>
  );
}
