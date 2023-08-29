import { Button, Container, ContainerLive, Content, ContentInfo, Dados, Foto, Text } from "./style";
import nario from '../../../assets/nario.png'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const data = [
    { label: 'Hibrida 1', value: '1' },
    { label: 'Hibrida 2', value: '2' },
    { label: 'Hibrida 3', value: '3' },
    { label: 'Hibrida 4', value: '4' },
    { label: 'Hibrida 5', value: '5' },
    { label: 'Hibrida 6', value: '6' },
    { label: 'Hibrida 7', value: '7' },
    { label: 'Hibrida 8', value: '8' },
];

const nome = [
    { label: 'alexandra', value: '1' },
    { label: 'brenda', value: '2' },
    { label: 'ramon', value: '3' },
    { label: 'vinicius', value: '4' },
];

const option = ["L1", "L2", "L3", "L4", "S1", "S2", "S3"]

export function CardHibrida() {
    const [value, setValue] = useState(null);
    const [selected, setSelected] = useState(null);

    //rendenrizando botoes
    const renderLive=()=> {
        return option.map((option, index)=>(
            <TouchableOpacity
            key={index}
            style={[{width:75, height:45,alignItems:"center", justifyContent:"center", borderRadius:16}, selected === index && {backgroundColor:'#19ABA3'}]}
            onPress={()=>setSelected(index)}
            >
                <Text>{option}</Text>
            </TouchableOpacity>
        ))
    }

    console.log(selected)

    return (
        <Container>
            <Content>
                <Foto
                    resizeMode="cover"
                    source={nario}
                />
                <ContentInfo>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecionar Hibrida"
                        searchPlaceholder="Pesquisar"
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />

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
                        placeholder="Selecionar Pessoa"
                        searchPlaceholder="Pesquisar"
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />

                    <Dados>
                        <Ionicons name="mic" size={24} color="#19ABA3" />
                        <Text>Reporter</Text>
                    </Dados>
                    <Dados>
                        <Feather name="phone-call" size={24} color="#19ABA3" />
                        <Text>(98)98888-8888</Text>
                    </Dados>
                </ContentInfo>
            </Content>

<ContainerLive>{renderLive()}</ContainerLive>

        </Container>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 10,
        marginLeft: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 250
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
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