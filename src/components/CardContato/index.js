import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Card,
  ContainerInfo,
  ContainerReporter,
  ContainerTel,
  Perfil,
  SubTitle,
  Text,
} from "./styles";
import nario from "../../../assets/nario.png";

export function CardContato({ data }) {

  return (
    <Card>
      <ContainerInfo>
        <Perfil source={data.foto === "" ? nario : data.foto} />

        <Text>{data?.nome}</Text>
        <ContainerReporter>
          <Entypo name="modern-mic" size={30} color="gray" />
          <SubTitle>{data?.cargo}</SubTitle>
        </ContainerReporter>
        <ContainerReporter>
          <MaterialIcons name="place" size={30} color="gray" />
          <SubTitle>{data?.praca}</SubTitle>
        </ContainerReporter>
      </ContainerInfo>
      <ContainerTel>
        <Feather name="phone-call" size={30} color="gray" />
        {data?.telefones.map((telefone) => {
          const ddd = telefone?.slice(0, 2);
          const prefixo = telefone?.slice(3, 7);
          const sufixo = telefone?.slice(8, 11);
          return <SubTitle>{`(${ddd})${prefixo}-${sufixo}`}</SubTitle>;
        })}
      </ContainerTel>
    </Card>
  );
}
