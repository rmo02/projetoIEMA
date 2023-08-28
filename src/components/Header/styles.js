import { styled } from "styled-components/native";

export const Container=styled.View`
width: 1290px;
height: 130px;
border-bottom: 16px;
`;

export const Logo=styled.Image`
width: 1280px;
height: 130px;
border-bottom-left-radius:16px;
border-bottom-right-radius:16px;
`;

export const ContainerButtons= styled.View`
 z-index: 2;
padding-left: 20px;
gap: 10px;
margin-top: -80px;
flex-direction: row;
`;

export const ButtonContato= styled.TouchableOpacity`
 border-radius: 50px;
 width: 50px;
 height: 50px;
 z-index: 2;
 justify-content: center;
 align-items: center;
 background-color: ${(props) => props.theme["BLUE_900"]};
`;

export const ButtonDelete= styled.TouchableOpacity`
 border-radius: 50px;
 width: 50px;
 height: 50px;
 z-index: 2;
 justify-content: center;
 align-items: center;
 background-color: ${(props) => props.theme["YELLOW_900"]};
`;