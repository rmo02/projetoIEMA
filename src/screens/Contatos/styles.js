import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color:${(props) => props.theme["FUNDO"]};
`;

export const Text = styled.Text`
  font-size: 24px;
  margin-left: 5px;
  color:${(props) => props.theme["WHITE"]};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  color:${(props) => props.theme["WHITE"]};
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

export const Card=styled.View`
margin-top:20px;
background-color: ${(props) => props.theme["CARD"]};
width: '100%';
padding-bottom: 20px ;
padding-left: 20px;
padding-right: 20px;
border-radius: 20px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const ContainerInfo=styled.View`
flex-direction: row;
align-items: center;
`;

export const ContainerReporter=styled.View`
margin-left: 20px;
flex-direction: row;
align-items: center;
`;

export const ContainerTel=styled.View`
flex-direction: row;
align-items: center;
`;




export const ModalContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const ModalContent = styled.View`
background-color: ${(props) => props.theme["GRAY_300"]};
justify-content: center;
align-items: center;
border-radius: 10px;
padding: 20px;
`;
