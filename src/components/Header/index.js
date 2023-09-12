import { ButtonContato, ButtonDelete, Container, ContainerButtons, ContainerData, Content, Logo, TitleData, TitleHora } from "./styles";
import jm1 from "../../../assets/jm1.png";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Header() {
    const [date, setDate] = useState(dayjs())
    const navigation = useNavigation();

    return (
        <Container>
            <Logo source={jm1} resizeMode="cover" />

            <Content>
                <ContainerButtons>
                <ButtonContato onPress={() => navigation.navigate('Contatos')}>
                        <MaterialIcons name="person-add-alt-1" size={24} color="white" />
                    </ButtonContato>
                    <ButtonDelete>
                        <Ionicons name="md-trash-outline" size={24} color="white" />
                    </ButtonDelete>
                </ContainerButtons>
                <ContainerData>
                    <TitleHora>
                        {date.format("HH:MM")}
                    </TitleHora>
                    <TitleData>
                        {date.format("DD/MM/YYYY")}
                    </TitleData>
                </ContainerData>
            </Content>
        </Container>
    )
}