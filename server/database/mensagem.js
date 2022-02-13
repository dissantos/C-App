const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getMensagem = (req, resp) => {
    const query = `SELECT * from public."Mensagem";`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { getMensagem }