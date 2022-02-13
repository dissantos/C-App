const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getTopico = (req, resp) => {
    const {
        id_topic_user
    } = req.body
    const query = `SELECT id_topic, mensagem, categoria_topic, nome_topic,id_topic_user from public."Topico" where id_topic_user='${id_topic_user}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}



module.exports = { getTopico }