import { styled } from "styled-components/native";
import { Ionicons as IoniconsOriginal } from "@expo/vector-icons";


export const ModalContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const ModalContent = styled.View`
border-radius: 36px;
padding: 20px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme["WHITE"]};
`;

export const ButtonLive = styled.TouchableOpacity`
  display: flex;
  width: 90px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? props.color500 : props.theme["WHITE"]};
  background-color: ${(props) => props.selected ? props.color500 : 'transparent'};
`;

export const Container = styled.View`
align-items: center;
justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  background-color: ${(props) => props.color700};
`;

export const ContainerLive = styled.View`
  padding-left: 20px;
  padding-bottom: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
 
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const ContentInfo = styled.View``;

export const Dados = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Foto = styled.Image`
  width: 80px;
  height: 150px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const SelectHibrida = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  width: 210px;
  margin-left: 15px;
  border-color: ${(props) => props.theme["GRAY_200"]};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;



export const ContainerInfo = styled.View`
align-items: flex-start;
`;

export const ContainerButtons = styled.View`
margin-top: 20px;
justify-content: flex-end;
flex-direction: row;
gap: 10px;
`;

export const StyledIonicons = styled(IoniconsOriginal)`
  color: ${(props) => props.theme[props.color300] || "#000"};
`;