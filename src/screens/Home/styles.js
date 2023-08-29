import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme["FUNDO"]};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: black;
`;