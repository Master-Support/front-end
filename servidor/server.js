const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Adiciona o middleware cors
app.use(cors());

// Restante do seu código do servidor...

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
