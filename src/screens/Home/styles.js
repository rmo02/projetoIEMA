import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme["FUNDO"]};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: black;
`;

export const ContainerCards =styled.View`
margin-top: 25px ;
flex: 1;
width: 100%;
gap: 10px;
flex-wrap:wrap;
flex-direction: row;
justify-content: flex-start;
align-items: center;
justify-content: center;
`;