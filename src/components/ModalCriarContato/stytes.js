import { styled } from "styled-components/native";


export const ModalContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const ModalContent = styled.View`
height: 620px;
width: 810px;
background-color: ${(props) => props.theme["GRAY_700"]};
border-radius: 36px;
padding: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  color:  ${(props) => props.theme["WHITE"]};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color:  ${(props) => props.theme["WHITE"]};
`;

export const ContainerFoto= styled.View`
  flex-direction: row;
  justify-content:center;
  align-items: center;
`;

export const AlterarFotoButton = styled.TouchableOpacity`
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  width: 238px;
  height: 54px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${(props) => props.theme["WHITE"]};
`;

export const Foto = styled.Image`
width: 150px;
height: 150px;
border-radius: 100px;
`;

export const Input = styled.TextInput`
height: 40px;
margin-top: 20px;
padding-left:10px;
width: 760px;
background-color: ${(props) => props.theme["WHITE"]};
border-radius: 12px;
`;

export const ContainerDados = styled.View`
flex-direction: row;
margin-top: 10px;
justify-content: space-between;
gap: 25px;
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