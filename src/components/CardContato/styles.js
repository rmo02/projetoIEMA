import { styled } from "styled-components/native";

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

export const Perfil =styled.Image`
width: 100px;
height:120px;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
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