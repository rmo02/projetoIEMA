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
import { useEffect, useState } from "react";
import { Botao } from "../Buttton";
import api from "../../api";
import * as ImagePicker from "expo-image-picker";
import { useUser } from "../../context/UserContext";
import { DropDownMenu } from "../DropDownMenu";

const Profissao = [
  { label: "Reporter", value: "Reporter" },
  { label: "Cinegrafista", value: "Cinegrafista" },
];

const Praca = [
  { label: "São Luis", value: "São Luis" },
  { label: "Imperatriz", value: "Imperatriz" },
  { label: "Balsas", value: "Balsas" },
  { label: "Santa Inês", value: "Santa Ines" },
  { label: "Morros", value: "Morros" },
];

export function ModalcriarContato({ mode, user, setIsModal, onCadastroSucesso}) {
  const { getUser } = useUser();
  const [nome, setNome] = useState("");
  const [contato1, setContato1] = useState("");
  const [contato2, setContato2] = useState("");
  const [cargo, setCargo] = useState("");
  const [praca, setPraca] = useState("");
  const [userPhoto, setUserPhoto] = useState(
    "https://avatars.githubusercontent.com/u/68224?v=4"
  );

  if (mode === 'edit' && user) {
    useEffect(() => {
      setNome(user.nome || "");
      setContato1(user.telefones[0] || "");
      setContato2(user.telefones[1] || "");
      setCargo(user.cargo || "");
      setPraca(user.praca || "");
      setUserPhoto(user.foto || "https://avatars.githubusercontent.com/u/68224?v=4");
    }, [user]);
  }

  const handleUserPhotoSelect = async () => {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      //se o usuário cancelar não acontece nada
      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      const fileExtension = userPhoto.split(".").pop();
  
      const photoFile = {
        name: `${nome}.${fileExtension}`.toLowerCase(),
        uri: userPhoto,
        type: `image/${fileExtension}`,
      };
  
      // Criar um objeto FormData para enviar a imagem
      const formData = new FormData();
      formData.append("foto", photoFile);
  
      // Adicione outros campos ao FormData
      formData.append("nome", nome);
      formData.append("cargo", cargo);
      formData.append("praca", praca);
      formData.append("telefones", JSON.stringify([contato1, contato2]));
  
      // Determinar a rota e o método HTTP com base no modo (create ou edit)
      let url = "/employees";
      let method = "POST"; // POST por padrão
  
      if (mode === "edit" && user) {
        // Se estiver no modo de edição e houver um usuário, use PUT
        url = `/employees/${user.id}`;
        method = "PUT";
      }
  
      // Enviar os dados para o servidor com a rota e o método corretos
      const response = await api.request({
        url,
        method,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getUser();
      onCadastroSucesso();
      setIsModal(false);
      const message = response.data.message; //pegando mensagem do retorno
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleExcluir = async () => {
    try {
      if (user && user.id) {
        // Certifique-se de que o usuário exista e tenha um ID antes de excluir
        const response = await api.delete(`/employees/${user.id}`);
        const message = response.data.message;
        console.log(message);
        setIsModal(false); // Fecha o modal após a exclusão
        getUser();
        onCadastroSucesso(); // Realize qualquer ação necessária após a exclusão (por exemplo, atualizar a lista de contatos)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <AlterarFotoButton onPress={handleUserPhotoSelect}>
          <SubTitle>Alterar Foto</SubTitle>
        </AlterarFotoButton>
        <ContainerFoto>
          <Foto source={{ uri: userPhoto }} />
        </ContainerFoto>
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <ContainerDados>
          <ContainerInfo>
            <Text>Profissão</Text>
            <DropDownMenu
              data={Profissao}
              value={cargo}
              setValue={setCargo}
              placeholder="Profissão"
            />
          </ContainerInfo>
          <ContainerInfo>
            <Text>Praça</Text>
            <DropDownMenu
              data={Praca}
              value={praca}
              setValue={setPraca}
              placeholder="Localidade"
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
              onChangeText={(text) => setContato2(text)}
            />
          </ContainerInfo>
        </ContainerDados>
        <ContainerButtons>
        {mode === 'edit' && user && (
            <Botao onPress={() => handleExcluir()} title="Excluir" />
          )}
          <Botao onPress={() => setIsModal(false)} title="Cancelar" />
          <Botao onPress={() => onSubmit()} title="Salvar" />
        </ContainerButtons>
      </ModalContent>
    </ModalContainer>
  );
}
