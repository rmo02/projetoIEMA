import {
  AlterarFotoButton,
  ContainerButtons,
  ContainerDados,
  ContainerFoto,
  ContainerInfo,
  Foto,
  Input,
  ModalContainer,
  ModalContent,
  SubTitle,
  Text,
} from "./stytes";
import nario from "../../../assets/nario.png";
import { TouchableOpacity } from "react-native";

export function ModalcriarContato({setIsModal}) {
  return (
    <ModalContainer>
      <ModalContent>
        <AlterarFotoButton>
          <SubTitle>Alterar Foto</SubTitle>
        </AlterarFotoButton>
        <ContainerFoto>
          <Foto source={nario} />
        </ContainerFoto>
        <Input placeholder="Nome" />
        <ContainerDados>
          <ContainerInfo>
            <Text>Profissão</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="Profissão" />
          </ContainerInfo>
          <ContainerInfo>
            <Text>Praça</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="São Luis" />
          </ContainerInfo>
        </ContainerDados>
        <ContainerDados>
          <ContainerInfo>
            <Text>Contato</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="Profissão" />
          </ContainerInfo>
          <ContainerInfo>
            <Text>Contato 2</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="São Luis" />
          </ContainerInfo>
        </ContainerDados>
        <ContainerButtons>
          <TouchableOpacity onPress={()=> setIsModal(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Salvar</Text>
          </TouchableOpacity>
        </ContainerButtons>
      </ModalContent>
    </ModalContainer>
  );
}
