import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards } from "./styles";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

export function Home() {
  const { users } = useUser();
  const hibridas = [
    "Híbrida 1",
    "Híbrida 2",
    "Híbrida 3",
    "Híbrida 4",
    "Híbrida 5",
    "Híbrida 6",
    "Híbrida 7",
    "Híbrida 8",
  ];
  const [resetTrigger, setResetTrigger] = useState(false); // Estado para controlar o acionamento da redefinição
  const [resetting, setResetting] = useState(false); // Estado para rastrear se a redefinição está em andamento

  const handleResetClick = () => {
    setResetting(true); // Marca que a redefinição está em andamento
    // Altera o valor de resetTrigger para acionar a redefinição nos componentes CardHibrida
    setResetTrigger(!resetTrigger);

    // Em algum ponto, redefinição e redefinindo o resetting para false
    setTimeout(() => {
      setResetting(false);
    }, 2000); // Defina o tempo desejado para a conclusão da redefinição
  };

  return (
    <>
      <Container>
        <Header onDeleteButtonClick={handleResetClick} />
        <ContainerCards>
          <CardHibrida
            data={users}
            title={"Hibrida 1"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 2"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 3"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 4"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 5"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 6"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 7"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
          <CardHibrida
            data={users}
            title={"Hibrida 8"}
            reset={resetTrigger}
            resetting={resetting} // Passando o estado resetting como prop
          />
        </ContainerCards>
      </Container>
    </>
  );
}
