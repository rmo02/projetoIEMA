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
import { FlatList, Modal, ScrollView, View } from "react-native";
import { CardContato } from "../../components/CardContato";
import { ModalcriarContato } from "../../components/ModalCriarContato";


export function Contatos() {
  const [isModal, setIsModal] = useState(false);
  const data = ["1", "2", "3","4", "5"];

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

      {/* <ScrollView>
      <CardContato />
      <CardContato /><CardContato /><CardContato /><CardContato /><CardContato /><CardContato /><CardContato /><CardContato /><CardContato />
      </ScrollView> */}

    <FlatList 
    data={data}
    keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardContato />
        )}
    />



    </Container>
  );
}
