import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 35%;
  height: 50%;
  border-radius: 16px;
  background-color: ${(props) => props.color700};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Foto = styled.Image`
  width: 110px;
  height: 235px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const ContentInfo = styled.View`
margin-left: 15px;
`;

export const Dados = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  gap: 3px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: justify;
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

export const ContainerLive = styled.View`
  padding-left: 20px;
  padding-bottom: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;