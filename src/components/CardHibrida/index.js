import React, { useEffect, useState } from "react";
import {
  ButtonLive,
  Container,
  ContainerLive,
  Content,
  ContentInfo,
  Dados,
  Foto,
  SelectHibrida,
  Text,
} from "./style";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { optionColorMapping } from "../../data/Lives";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ModalCard } from "../../components/ModalCard";

const option = ["L1", "L2", "L3", "L4", "L5", "L6", "S1", "S2", "S3"];

export function CardHibrida({ data, title, reset, hideModal }) {
  const [value, setValue] = useState(null);
  const [selected, setSelected] = useState(null);
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [selectedUser, setSelectedUser] = useState(null); // Estado para armazenar o usuário selecionado
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  // Função para limpar os dados do card e redefinir para os valores iniciais
  const resetState = () => {
    setPhoto('https://avatars.githubusercontent.com/u/68224?v=4');
    setCargo("");
    setTelefone("");
    setValue(null);
    setSelected(null);
  };

  // Efeito para observar mudanças na prop 'reset'
  useEffect(() => {
    if (reset) {
      // Se a prop 'reset' mudar, chamando a função para redefinir o estado
      resetState();
    }
  }, [reset]);

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedUsers = data.map((user) => ({
        label: `${user.nome}`,
        value: user.id.toString(),
      }));
      setUsers(formattedUsers);
    }
  }, [data]);

  useEffect(() => {
    // Quando um usuário for selecionado, atualize os dados do usuário selecionado
    if (selectedUser) {
      // Aqui, você deve obter os dados do usuário selecionado a partir do seu estado de dados do backend
      // Suponha que você tenha um array 'data' contendo os dados do backend
      const user = data.find((item) => item.id.toString() === selectedUser);
      if (user) {
        // Atualize a foto, o cargo e o telefone com os dados do usuário selecionado
        // Certifique-se de que as chaves corretas correspondam aos campos no seu objeto de usuário
        setPhoto(user.foto);
        setCargo(user.cargo);
        setTelefone(user.telefones[0]); // Aqui, pegue o primeiro número de telefone
      }
    }
  }, [selectedUser, data]);

  // Estados adicionais para armazenar a foto, o cargo e o telefone do usuário selecionado
  const [photo, setPhoto] = useState('https://avatars.githubusercontent.com/u/68224?v=4');
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");

  // Render buttons
  const renderLive = (startIndex, endIndex) => {
    return option.slice(startIndex, endIndex).map((opt, index) => {
      const overallIndex = index + startIndex;
      const colors = optionColorMapping[opt]; // Obtenha o mapeamento de cores para a opção atual

      return (
        <ButtonLive
          key={index}
          onPress={() => setSelected(overallIndex)}
          selected={selected === overallIndex}
          color300={colors.color300} // Passe a cor 300 como prop para o botão
          color500={colors.color500} // Passe a cor 500 como prop para o botão
          color700={colors.color700} // Passe a cor 700 como prop para o botão
        >
          <Text>{opt}</Text>
        </ButtonLive>
      );
    });
  };



  return (

    <SafeAreaView>
      <Container color700={optionColorMapping[option[selected]]?.color700}>


        <Content>
          <Foto source={{ uri: photo }} alt="perfil" />
          <ContentInfo>

            <SelectHibrida onPress={openModal}>
              <Text>{title}</Text>
            </SelectHibrida>



            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={users}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Funcionário"
              searchPlaceholder="Pesquisar"
              value={value}
              onChange={(item) => {
                setValue(item.value);
                setSelectedUser(item.value); // Atualizando o usuário selecionado quando um nome for selecionado
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color="black"
                  name="Safety"
                  size={20}
                />
              )}
            />

            <Dados>
              {
                cargo === "Reporter" ? <Ionicons name="mic" size={24} color={optionColorMapping[option[selected]]?.color300} />
                  : <MaterialCommunityIcons name="video-vintage" size={24} color={optionColorMapping[option[selected]]?.color300} />
              }
              <Text>{cargo}</Text>
            </Dados>
            <Dados>
              <Feather name="phone-call" size={24} color={optionColorMapping[option[selected]]?.color300} />
              {telefone.length > 0 && (<Text>{`(${telefone.slice(0, 2)})${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`}</Text>)}
            </Dados>
          </ContentInfo>
        </Content>

        <ContainerLive>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 300, paddingBottom: 30 }}>
            <View>
              <View style={{ flexDirection: "row", gap: 5, marginBottom: 5 }}>
                {renderLive(0, 3)}
                {renderLive(6, 8)}
              </View>
              <View style={{ flexDirection: "row", gap: 5, width: 350 }}>
                {renderLive(3, 6)}
              </View>
            </View>
          </ScrollView>
        </ContainerLive>

      </Container>

      {showModal?
      <ModalCard
      animationType="slide"
      
      hideModal={()=>setShowModal(false)}
    >
    </ModalCard>:null}
      
    </SafeAreaView>






  );
}

const styles = StyleSheet.create({

  dropdown: {
    marginTop: 10,
    marginLeft: 16,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 190,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


