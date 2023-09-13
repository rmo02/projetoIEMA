import {
  ButtonLive,
  Container,
  ContainerLive,
  Content,
  ContentInfo,
  Dados,
  Foto,
  ScrollLives,
  SelectHibrida,
  Text,
} from "./style";
import fylip from "../../../assets/fylip.jpeg";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { optionColorMapping } from "../../data/Lives";


const option = ["L1", "L2", "L3", "L4", "L5", "L6", "S1", "S2", "S3"];

export function CardHibrida({data}) {
  const nome = 
    data?.map((func)=>{
      return (
        { label: `${func.nome}`, value: `${func.id}`}
      )
    })

  const [value, setValue] = useState(null);
  const [selected, setSelected] = useState(null);

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
    <Container color700={optionColorMapping[option[selected]]?.color700}>
      <Content>
        <Foto source={fylip} alt="perfil" />
        <ContentInfo>
          <SelectHibrida onPress={() => console.log("hibrida")}>
            <Text>Híbrida 1</Text>
          </SelectHibrida>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={nome}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Funcionário"
            searchPlaceholder="Pesquisar"
            value={value}
            onChange={(item) => {
              setValue(item.value);
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
            <Ionicons name="mic" size={24} color={optionColorMapping[option[selected]]?.color300} />
            <Text>Reporter</Text>
          </Dados>
          <Dados>
            <Feather name="phone-call" size={24} color={optionColorMapping[option[selected]]?.color300} />
            <Text>(98)98888-8888</Text>
          </Dados>
        </ContentInfo>
      </Content>

      <ContainerLive>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:300,paddingBottom:30}}>
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