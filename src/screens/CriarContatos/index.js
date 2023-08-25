import { Container, ContainerButtons, ContainerFotos, ContainerInfo, ContainerNome, ContainerProfissao, InputProfissao, Perfil, Text } from "./styles";
import nario from "../../../assets/nario.png"
import { View, StyleSheet, Modal, Pressable } from "react-native";
import { useState } from "react";


export function CriarContatos() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredViewModal}>

                    <Container style={styles.modalView}>
                        <ContainerFotos>
                            <Perfil
                                source={nario}
                            />

                            <ContainerNome
                                placeholder="Nome"
                            />

                            <ContainerInfo>
                                <ContainerProfissao>
                                    <Text>Profissão</Text>
                                    <InputProfissao placeholder="Profissão" />
                                </ContainerProfissao>

                                <ContainerProfissao>
                                    <Text>Praça</Text>
                                    <InputProfissao placeholder="Praça" />
                                </ContainerProfissao>
                            </ContainerInfo>

                            <ContainerInfo>
                                <ContainerProfissao>
                                    <Text>Contato1</Text>
                                    <InputProfissao placeholder="98123456" />
                                </ContainerProfissao>
                                <ContainerProfissao>
                                    <Text>Contato2</Text>
                                    <InputProfissao placeholder="98123456" />
                                </ContainerProfissao>
                            </ContainerInfo>
                        </ContainerFotos>


                        <ContainerButtons>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Salvar Contato</Text>
                            </Pressable>

                        </ContainerButtons>

                    </Container>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    centeredViewModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 750,
        margin: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});