import { createContext, useContext, useState } from 'react';
import { Video } from '../objects/Video.js'

const VideosContext = createContext(null);

export function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    function adicionarVideos(video) {
        setVideos([...videos, video]);
    }

    return (
        <VideosContext.Provider value={{ videos, adicionarVideos }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideos() {
    return useContext(VideosContext);
}
