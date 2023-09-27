import { useEffect, useState } from "react";
import {
  ButtonLive,
  Container,
  ContainerLive,
  Content,
  ContentInfo,
  Dados,
  Foto,
  Text,
} from "./styles";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { optionColorMapping } from "../../data/Lives";

const option = ["L1", "L2", "L3", "L4", "L5", "L6", "S1", "S2", "S3"];


export function ModalHibrida({
  onClose,
  data,
  setValue,
  value,
  selected,
  setSelected,
  users,
  setUsers,
  selectedUser,
  setSelectedUser,
  photo,
  setPhoto,
  setCargo,
  cargo,
  setTelefone,
  telefone,
  title,
  setEditedHibrida,
  editedHibrida
}) {
  const [telefone2, setTelefone2] = useState(`${data[0]?.telefones[1]}`)
  
  const hibridas = [
    { label: "Hibrida 1", value: "Hibrida 1" },
    { label: "Hibrida 2", value: "Hibrida 2" },
    { label: "Hibrida 4", value: "Hibrida 3" },
    { label: "Hibrida 5", value: "Hibrida 5" },
    { label: "Hibrida 6", value: "Hibrida 6" },
    { label: "Hibrida 7", value: "Hibrida 7" },
    { label: "Hibrida 8", value: "Hibrida 8" },
    ]

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
    if (selectedUser) {
      const user = data?.find((item) => item.id.toString() === selectedUser);
      if (user) {
        // Atualize os estados do usuário selecionado com os novos dados
        setPhoto(user.foto);
        setCargo(user.cargo);
        setTelefone(user.telefones[0]);
        setTelefone2(user.telefones[1]);
      }
    }
  }, [selectedUser, data]);



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
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Container color700={optionColorMapping[option[selected]]?.color700}>
          <Content>
            <Foto source={{ uri: photo }} alt="perfil" />
            <ContentInfo>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={hibridas}
                search
                maxHeight={400}
                labelField="label"
                valueField="value"
                placeholder="Hibrida"
                searchPlaceholder="Pesquisar"
                value={editedHibrida}
                onChange={(item) => {
                  setEditedHibrida(item.value);
                }}
              />

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={users}
                search
                maxHeight={400}
                labelField="label"
                valueField="value"
                placeholder="Funcionário"
                searchPlaceholder="Pesquisar"
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                  setSelectedUser(item.value); // Atualizando o usuário selecionado quando um nome for selecionado
                }}
              />

              <Dados>
                {cargo === "Reporter" ? (
                  <Ionicons
                    name="mic"
                    size={24}
                    color={optionColorMapping[option[selected]]?.color300}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="video-vintage"
                    size={24}
                    color={optionColorMapping[option[selected]]?.color300}
                  />
                )}
                <Text>{cargo}</Text>
              </Dados>
              <Dados>
                <Feather
                  name="phone-call"
                  size={24}
                  color={optionColorMapping[option[selected]]?.color300}
                />
                <Text>{`(${telefone?.slice(0, 2)})${telefone?.slice(
                  2,
                  7
                )}-${telefone?.slice(7, 11)}`}</Text>
              </Dados>
              <Dados>
                <Feather
                  name="phone-call"
                  size={24}
                  color={optionColorMapping[option[selected]]?.color300}
                />
                <Text>{telefone2 === "" ? "" : `(${telefone2?.slice(0, 2)})${telefone2?.slice(2,7)}-${telefone2?.slice(7, 11)}`}</Text>
              </Dados>
            </ContentInfo>
          </Content>
          <ContainerLive>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ height: 300, paddingBottom: 30 }}
            >
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 20,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 350,
    paddingLeft: 10,
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
