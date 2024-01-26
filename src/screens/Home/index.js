import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards } from "./styles";
import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";

const hibridas = [
  "Hibrida 1",
  "Hibrida 2",
  "Hibrida 3",
  "Hibrida 4",
  "Hibrida 5",
  "Hibrida 6",
  "Hibrida 7",
  "Hibrida 8",
];

export function Home() {
  const { users } = useUser();
  const [resetTrigger, setResetTrigger] = useState(false); // Estado para controlar o acionamento da redefinição
  const [resetting, setResetting] = useState(false); // Estado para rastrear se a redefinição está em andamento

  const handleResetClick = () => {
    setResetting(true); // Marca que a redefinição está em andamento
    // Altera o valor de resetTrigger para acionar a redefinição nos componentes CardHibrida
    setResetTrigger(!resetTrigger);

    // Em algum ponto, redefinição e redefinindo o resetting para false
    setTimeout(() => {
      setResetting(false);
    }, 1000); // Defina o tempo desejado para a conclusão da redefinição
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>{
      return true
    })
  }, [])

  return (
    <>
    <Container>
      <Header onDeleteButtonClick={handleResetClick} />
      <ContainerCards>
        {hibridas.map((hibrida, index) => (
          <CardHibrida
            key={index} // Certifique-se de usar uma chave única
            data={users}
            title={hibrida}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
        ))}
      </ContainerCards>
    </Container>
  </>
  );
}
