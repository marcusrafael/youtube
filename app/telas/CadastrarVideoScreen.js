import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Video from '../objects/Video.js';
import { useVideos } from '../contextos/VideosContext.js';

export default function CadastrarVideoScreen({ navigation }) {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [url, setUrl] = useState('');

    const { videos, adicionarVideos } = useVideos();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Título do Vídeo"
                value={titulo}
                onChangeText={setTitulo}
            />

            <TextInput
                placeholder="URL do Vídeo"
                value={url}
                onChangeText={setUrl}
            />

            <TextInput
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
            />

            <Button title="Cadastrar" onPress={() => {
                adicionarVideos(new Video(titulo, descricao, url));
                alert("Vídeo cadastrado com sucesso!")
            }} />
            <Button title="Voltar" onPress={() => { navigation.goBack() }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
