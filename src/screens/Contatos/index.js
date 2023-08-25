import { BotaoAdd, BotaoVoltar, Container, ContainerButtom, Header, Perfil, Pesquisa, Text } from "./styles";
import nario from "../../../assets/nario.png"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native";



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
            <Perfil
                source={nario}
            />
        </Container>
    );
}