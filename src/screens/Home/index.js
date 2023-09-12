import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards, Text } from "./styles";

export function Home() {

  const data = ["Híbrida 1","Híbrida 2","Híbrida 3","Híbrida 4","Híbrida 5","Híbrida 6", "Híbrida 7", "Híbrida 8"]
  
  return (
    <Container>
      <Header />
      <ContainerCards>

        {
          data.map((hib, index) => {
            return (
              <CardHibrida />
            )
          })
        }
      </ContainerCards>
      
    </Container>
  );
}
