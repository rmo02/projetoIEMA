import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color:  ${(props) => props.theme["FUNDO"]};;
`;

export const Text = styled.Text`
  font-size: 24px;
  color:  ${(props) => props.theme["WHITE"]};
`;
export const Perfil = styled.Image` 
 width:150px;
 height: 150px;
 
`;
export const ContainerFotos = styled.View`
align-items: center;
justify-content: center;
`;

export const ContainerNome = styled.TextInput`
width: "100%";
height: 40px;
background-color: ${(props) => props.theme["WHITE"]} ;
border-radius: 12px;
padding-left: 10px;
`;
export const ContainerInfo =styled.View`
flex-direction: row;
margin-top: 10px;
justify-content: space-between;
`;
export const ContainerProfissao=styled.View`
align-items: flex-start;

`;
export const InputProfissao = styled.TextInput`
width: 320px;
height: 40px;
background-color: ${(props) => props.theme["WHITE"]} ;
border-radius: 12px;
padding-left: 10px;
margin-top: 10px;
`;
export const InputContatos = styled.TextInput`
width: 320px;
height: 40px;
background-color: ${(props) => props.theme["WHITE"]} ;
border-radius: 12px;
padding-left: 10px;
margin-top: 10px;
`;

