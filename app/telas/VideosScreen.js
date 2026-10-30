
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useContext } from 'react';
import { useVideos } from '../contextos/VideosContext.js';

export default function VideosScreen({ navigation }) {

    const { videos, adicionarVideos } = useVideos();

    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                renderItem={({ item }) => <Text>{item.titulo} {item.descricao} {item.url}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button title="Cadastrar Vídeo" onPress={() => navigation.navigate('CadastrarVideo')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    },
});
