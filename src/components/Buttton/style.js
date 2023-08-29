import styled from "styled-components/native"

export const Container= styled.TouchableOpacity`
width: 238px;
height: 54px;
border-radius: 16px;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme["BLUE_400"]};
`;

export const Text = styled.Text`
  font-size: 24px;
  color:  ${(props) => props.theme["WHITE"]};
`;