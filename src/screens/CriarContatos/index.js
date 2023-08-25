import { Container , ContainerFotos, ContainerInfo, ContainerNome, ContainerProfissao, InputProfissao, Perfil, Text } from "./styles";
import nario from "../../../assets/nario.png"

export function CriarContatos() {
    return (
        <Container>
           <ContainerFotos>
           <Perfil 
            source={nario}
            />
           </ContainerFotos>
           <ContainerNome
           placeholder="Nome"
           />
           <ContainerInfo>
            <ContainerProfissao>
                <Text>Profissão</Text>
                <InputProfissao placeholder="Profissão"/>
            </ContainerProfissao>
            <ContainerProfissao>
                <Text>Praça</Text>
                <InputProfissao placeholder="Praça"/>
            </ContainerProfissao>
           </ContainerInfo>
           <ContainerInfo>
            <ContainerProfissao>
                <Text>Contato1</Text>
                <InputProfissao placeholder="98123456"/>
            </ContainerProfissao>
            <ContainerProfissao>
                <Text>Contato2</Text>
                <InputProfissao placeholder="98123456"/>
            </ContainerProfissao>
           </ContainerInfo>
        </Container>
    );
}