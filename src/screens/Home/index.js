import { useEffect, useState } from "react";
import { CardHibrida } from "../../components/CardHibrida";
import { Header } from "../../components/Header";
import { Container, ContainerCards, Text } from "./styles";
import api from "../../api";

export function Home() {
  const [user, setUser] = useState()

  const getUser = async () => {
    try {
      const res = await api.get('/employees');
      setUser(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <Container>
      <Header />
      <ContainerCards>
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
        <CardHibrida data={user} />
      </ContainerCards>
    </Container>
  );
}
