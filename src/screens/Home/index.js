import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards, Text } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <ContainerCards>
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
        <CardHibrida />
      </ContainerCards>
    </Container>
  );
}
