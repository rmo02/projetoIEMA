import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Card, ContainerInfo, ContainerReporter, ContainerTel, Perfil, SubTitle, Text } from './styles';
import nario from "../../../assets/nario.png";
export function CardContato() {
  return (
    <Card>
      <ContainerInfo>
        <Perfil source={nario} />

        <Text>NarioSantos</Text>
        <ContainerReporter>
          <Entypo name="modern-mic" size={30} color="gray" />
          <SubTitle>Reporter</SubTitle>
        </ContainerReporter>
        <ContainerReporter>
          <MaterialIcons name="place" size={30} color="gray" />
          <SubTitle>SaoLuis</SubTitle>
        </ContainerReporter>
      </ContainerInfo>
      <ContainerTel>
        <Feather name="phone-call" size={30} color="gray" />
        <SubTitle>(98)1234-5678</SubTitle>
      </ContainerTel>
    </Card>
  );
}
