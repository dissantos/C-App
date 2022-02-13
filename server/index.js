const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const router = express.Router()
const PORT = process.env.PORT || 3001;
const dbHome = require('./database/home')
const dbUserData = require('./database/profile')
const reqNoticias = require('./database/noticias')
const reqNoticia = require('./database/noticia')
const dbAtividades = require('./database/atividades')

app.use(require("cors")())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use('/', router)

/*
app.get("/", (req, res) => {
  console.log("Teste")
  res.send("Entrou")
});
*/

router
    .route('/home/dadosAcademicos')
    .post(dbHome.getDadosAcademicos)

router
    .route('/home/atividades')
    .post(dbAtividades.getAtividades)

router
    .route('/login')
    .post(dbUserData.getUserData)

router
    .route('/noticias')
    .get(reqNoticias.getNoticiasCefet)

router
  .route('/noticia')
  .post(reqNoticia.getNoticiaCefet)

app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Server listening on ${PORT}`);
});
