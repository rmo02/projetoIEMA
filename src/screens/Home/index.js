import { useEffect, useState } from "react";
import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards, Text } from "./styles";
import api from "../../api";
import { useUser } from "../../context/UserContext";

export function Home() {
  const { users } = useUser();

  const hibridas = ["Híbrida 1", "Híbrida 2","Híbrida 3","Híbrida 4","Híbrida 5","Híbrida 6","Híbrida 7","Híbrida 8",]

  return (
    <Container>
      <Header />
      <ContainerCards>
      {
        hibridas.map((hibrida, i) =>{
          return (
            <CardHibrida data={users} title={hibrida}/>

          )
        })
      }
      </ContainerCards>
    </Container>
  );
}
