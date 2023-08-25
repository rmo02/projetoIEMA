import { BotaoAdd, BotaoVoltar, Card, Container, ContainerButtom, ContainerInfo, ContainerReporter, ContainerTel, Header, Perfil, Pesquisa, SubTitle, Text } from "./styles";
import nario from "../../../assets/nario.png"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export function Contatos() {
    return (
        <Container>
            <Header>
                <ContainerButtom>
                    <BotaoVoltar>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </BotaoVoltar>

                    <BotaoAdd>
                        <Ionicons name="add" size={24} color="white" />
                    </BotaoAdd>


                </ContainerButtom>
                <Pesquisa
                    placeholder="pesquisar"
                />
            </Header>


            <Card>
                <ContainerInfo>
                    <Perfil
                        source={nario}
                    />

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


        </Container>
    );
}