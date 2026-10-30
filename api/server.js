const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let videos = [];
let nextId = 1;

app.get('/videos', (request, response) => {
  response.status(200).json(videos);
});

app.post('/videos', (request, response) => {
  const { titulo, descricao, url } = request.body;

  const video = {
    id: nextId++,
    titulo: titulo,
    descricao: descricao,
    url: url,
  };

  videos.push(video);
  return response.status(201).json(video);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API de vídeos executando em http://localhost:${PORT}`);
});
