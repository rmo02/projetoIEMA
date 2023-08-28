import { ButtonContato, ButtonDelete, Container, ContainerButtons, Logo } from "./styles";
import jm1 from "../../../assets/jm1.png";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Header(){
    return(
        <Container>
            <Logo  source={jm1} resizeMode="cover"/>
            <ContainerButtons>
                <ButtonContato>
                <MaterialIcons name="person-add-alt-1" size={24} color="white" />
                </ButtonContato>
                <ButtonDelete>
                <Ionicons name="md-trash-outline" size={24} color="white" />
                </ButtonDelete>
            </ContainerButtons>
        </Container>
    )
}