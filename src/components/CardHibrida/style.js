import styled from 'styled-components/native';

export const Container = styled.View`
width: 420px;
height: 350px;
border-radius: 36px;
background-color:${(props) => props.theme["GREEN_700"]};
`;

export const Content = styled.View`
flex-direction: row;
`;


export const Foto = styled.Image`
width: 110px;
height: 220px;
border-top-left-radius:36px;
border-bottom-right-radius:36px;
`;

export const ContentInfo = styled.View`

`;

export const Dados = styled.View`
margin-top: 10px;
margin-left: 10px;
gap: 5px;
flex-direction: row;
align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color:  ${(props) => props.theme["WHITE"]};
`;

export const Button = styled.TouchableOpacity`
width: 75px;
margin: 5px;
height: 45px;
align-items: center;
justify-content: center;
border-radius: 16px;
background-color:${(props) => props.theme["GREEN_300"]};
`;

export const ContainerLive =styled.View`
margin-left: 20px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-top: 10px;
`;
