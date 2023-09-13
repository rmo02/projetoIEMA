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
import * as  ImagePicker from "expo-image-picker"; 

const Profissao = [
  { label: 'Reporter', value: 'Reporter' },
  { label: 'Cinegrafista', value: 'Cinegrafista' }
];

const Praca = [
  { label: 'SLS', value: 'São Luis' },
  { label: 'ITZ', value: 'Imperatriz' },
  { label: 'Balsas', value: 'Balsas' },
];

export function ModalcriarContato({setIsModal}) {
  const [nome,setNome] = useState('');
  const[contato1,setContato1]=useState('');
  const [contato2,setConato2]=useState('');
  const[profissao,setProfissao]=useState('');
  const [praca,setPraca]=useState('');
  const[userPhoto,setUserPhoto]=useState('https://avatars.githubusercontent.com/u/142349109?v=4');

  async function handleUserPhotoSelect(){
    const photoSelect= await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      quality:1,
      aspect:[4,4],
      allowsEditing:true,
    });
    if(photoSelect.canceled){return} 
    setUserPhoto(photoSelect.assets[0].uri)
  }

  const onSubmit = () => {
    console.log('nome', nome)
    console.log('profissao', profissao)
    console.log('praça', praca)
    console.log('contato 1', contato1)
    console.log('contato 2', contato2)
  }

  return (
    <ModalContainer>
      <ModalContent>
        <AlterarFotoButton onPress={handleUserPhotoSelect}  >
          <SubTitle>Alterar Foto</SubTitle>
        </AlterarFotoButton>
        <ContainerFoto>
          <Foto source={{uri:userPhoto}} />
        </ContainerFoto>
        <Input placeholder="Nome" value={nome} onChangeText={text => setNome(text)}/>
        <ContainerDados>
          <ContainerInfo>
            <Text>Profissão</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="Profissão" value={profissao} onChangeText={text=>setProfissao(text)}/>
          </ContainerInfo>
          <ContainerInfo>
            <Text>Praça</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="São Luis" value={praca} onChangeText={text =>setPraca(text)}/>
          </ContainerInfo>
        </ContainerDados>
        <ContainerDados>
          <ContainerInfo>
            <Text>Contato</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="(98)1234-5678" value={contato1} onChangeText={text =>setContato1(text)}/>
          </ContainerInfo>
          <ContainerInfo>
            <Text>Contato 2</Text>
            <Input style={{ width: 370, height: 40 }} placeholder="(98)1234-5678" value={contato2} onChangeText={text =>setConato2(text)} />
          </ContainerInfo>
        </ContainerDados>
        <ContainerButtons>
          <Botao onPress={()=>setIsModal(false)} title= 'Cancelar'/>
            <Botao onPress={()=>onSubmit()} title='Salvar'/>
        </ContainerButtons>
      </ModalContent>
    </ModalContainer>
  );
}