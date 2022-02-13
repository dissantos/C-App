const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getMensagem = (req, resp) => {
    const {
        id_topic
    } = req.body
    const query = `SELECT * from public."Mensagem" where id_topic='${id_topic}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { getMensagem }