import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Card,
  ContainerInfo,
  ContainerReporter,
  ContainerTel,
  Perfil,
  SubTitle,
  Text,
} from "./styles";

export function CardContato({ data }) {

  return (
    <Card>
      <ContainerInfo>
        <Perfil source={{ uri: data.foto }} />
        <Text>{data?.nome}</Text>
        <ContainerReporter>
          {
            data?.cargo == "Reporter" ? <Entypo name="modern-mic" size={30} color="gray" />
            : <MaterialCommunityIcons name="video-vintage" size={30} color="gray" />
          }
          <SubTitle>{data?.cargo}</SubTitle>
        </ContainerReporter>
        <ContainerReporter>
          <MaterialIcons name="place" size={30} color="gray" />
          <SubTitle>{data?.praca}</SubTitle>
        </ContainerReporter>
      </ContainerInfo>
      <ContainerTel>
        <Feather name="phone-call" size={30} color="gray" />
        {data?.telefones.length > 0 && (
          <SubTitle>{`(${data.telefones[0].slice(
            0,
            2
          )}) ${data.telefones[0].slice(2, 7)}-${data.telefones[0].slice(
            7,
            11
          )}`}</SubTitle>
        )}
      </ContainerTel>
    </Card>
  );
}
