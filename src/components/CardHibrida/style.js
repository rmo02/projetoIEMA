import styled from "styled-components/native";

export const Container = styled.View`
  width: 24%;
  height: 45%;
  border-radius: 16px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme["GREEN_700"]};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Foto = styled.Image`
  width: 80px;
  height: 150px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const ContentInfo = styled.View``;

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

export const Dados = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  gap: 5px;
  flex-direction: row;
  align-items: center;
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
    props.selected ? props.theme["GREEN_400"] : props.theme["WHITE"]};
  background-color: ${(props) =>
    props.selected
      ? props.theme["GREEN_400"] // Change to the selected color
      : props.theme["GREEN_700"]}; // Change to the not selected color
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
