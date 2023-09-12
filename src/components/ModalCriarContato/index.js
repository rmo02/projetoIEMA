import {
  AlterarFotoButton,
  ContainerButtons,
  ContainerDados,
  ContainerFoto,
  ContainerInfo,
  Foto,
  Input,
  ModalContainer,
  ModalContent,
  SubTitle,
  Text,
} from "./stytes";
import nario from "../../../assets/nario.png";
import { useState } from "react";
import { Botao } from "../Buttton";
import api from "../../api";

const Profissao = [
  { label: "Reporter", value: "Reporter" },
  { label: "Cinegrafista", value: "Cinegrafista" },
];

const Praca = [
  { label: "SLS", value: "São Luis" },
  { label: "ITZ", value: "Imperatriz" },
  { label: "Balsas", value: "Balsas" },
];

export function ModalcriarContato({ setIsModal }) {
  const [nome, setNome] = useState("");
  const [contato1, setContato1] = useState("");
  const [contato2, setConato2] = useState("");
  const [cargo, setCargo] = useState("");
  const [praca, setPraca] = useState("");

  const onSubmit = async () => {
    try {
      const res = await api.post("/employees", {
        nome,
        cargo,
        foto: "",
        telefones: [`${contato1},${contato2}`],
      });
      console.log("deu certo", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <AlterarFotoButton>
          <SubTitle>Alterar Foto</SubTitle>
        </AlterarFotoButton>
        <ContainerFoto>
          <Foto source={nario} />
        </ContainerFoto>
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <ContainerDados>
          <ContainerInfo>
            <Text>Profissão</Text>
            <Input
              style={{ width: 370, height: 40 }}
              placeholder="Profissão"
              value={cargo}
              onChangeText={(text) => setCargo(text)}
            />
          </ContainerInfo>
          <ContainerInfo>
            <Text>Praça</Text>
            <Input
              style={{ width: 370, height: 40 }}
              placeholder="São Luis"
              value={praca}
              onChangeText={(text) => setPraca(text)}
            />
          </ContainerInfo>
        </ContainerDados>
        <ContainerDados>
          <ContainerInfo>
            <Text>Contato</Text>
            <Input
              style={{ width: 370, height: 40 }}
              placeholder="(98)1234-5678"
              value={contato1}
              onChangeText={(text) => setContato1(text)}
            />
          </ContainerInfo>
          <ContainerInfo>
            <Text>Contato 2</Text>
            <Input
              style={{ width: 370, height: 40 }}
              placeholder="(98)1234-5678"
              value={contato2}
              onChangeText={(text) => setConato2(text)}
            />
          </ContainerInfo>
        </ContainerDados>
        <ContainerButtons>
          <Botao onPress={() => setIsModal(false)} title="Cancelar" />
          <Botao onPress={() => onSubmit()} title="Salvar" />
        </ContainerButtons>
      </ModalContent>
    </ModalContainer>
  );
}
