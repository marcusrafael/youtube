import { createContext, useContext, useState } from 'react';
import Video from '../objects/Video.js';

const VideosContext = createContext(null);
const API_URL = "http://ADICIONE_SEU_IP_AQUI:3000";

export function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    async function buscarVideos() {
        const response = await fetch(`${API_URL}/videos`);
        const dados = await response.json();

        const listaVideos = dados.map(
            video => new Video(
                video.id,
                video.titulo,
                video.url,
                video.descricao
            )
        );

        setVideos(listaVideos);
    }

    async function adicionarVideos(video) {
        const response = await fetch(`${API_URL}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo: video.titulo,
                descricao: video.descricao,
                url: video.url,
            }),
        });

        const novoVideo = await response.json();

        const objetoVideo = new Video(
            novoVideo.id,
            novoVideo.titulo,
            novoVideo.url,
            novoVideo.descricao
        );

        setVideos([...videos, objetoVideo]);
    }

    return (
        <VideosContext.Provider value={{ videos, buscarVideos, adicionarVideos }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideos() {
    return useContext(VideosContext);
}
