const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const addMensagem= (req, resp) => {
    const { id, nome_autor, conteudo, data, id_topic,id_mensagem } = req.body
    const field = 'id, nome_autor, conteudo, data, id_topic,id_mensagem'
    const values = '$1, $2, $3, $4, $5, $6'
    const query = `Insert into public."Mensagem"(${field}) Values (${values});`
    pool.query(query,  [id, nome_autor, conteudo, data, id_topic,id_mensagem], (err, res) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { addMensagem }