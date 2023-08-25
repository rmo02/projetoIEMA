import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color:${(props) => props.theme["FUNDO"]};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: black;
`;

export const Perfil =styled.Image`
width: 100px;
height:120px;
`;

export const Header = styled.View`
width:'100%';                               
flex-direction: row;
padding-top: 10px;
padding-bottom: 10px;
justify-content: space-between;
`;

export const ContainerButtom=styled.View`
flex-direction: row;

`;

export const BotaoVoltar=styled.TouchableOpacity`
height: 50px;
width: 50px;
border-radius: 50px;
justify-content: center;
align-items: center;
margin-right:10px;
background-color: ${(props) => props.theme["BLUE_700"]};
`;

export const BotaoAdd=styled.TouchableOpacity`
height: 50px;
width: 50px;
border-radius: 50px;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme["BLUE_700"]};
`;

export const Pesquisa = styled.TextInput`
width: 330px;
border-radius: 50px;
padding-left: 10px;
background-color: ${(props) => props.theme["WHITE"]};
`;

