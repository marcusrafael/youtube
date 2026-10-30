class Video {
    constructor(titulo, url, descricao) {
        this.id = Math.random();
        this.titulo = titulo;
        this.url = url;
        this.descricao = descricao;
    }
}

export default Video;
