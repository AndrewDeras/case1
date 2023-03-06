const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes/routes');
const connection = require("./database/database");

connection.sync({ force: true }).then(() => console.log('Banco Rodando!!'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// rotas
app.use('/', routes);

// connection
//   .authenticate()
//   .then(() => {
//     console.log('Conexão estabelecida com o banco de dados');
//     return connection.sync();
//   })
//   .then(() => {
//     console.log('Modelos sincronizados com o banco de dados');
//   })
//   .catch((err) => {
//     console.error('Erro ao conectar com o banco de dados' + err);
//   })

app.listen(5656, () => {
  console.log('Servidor rodando em http://localhost:5656');
});