import { Container, Text } from "./style";

export function Botao ({title,onPress}){
    return(
        <Container onPress={onPress}>
        <Text>{title}</Text>
        </Container>
    );
}