const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getUserData = (req, resp) => {
    const {
        param_busca
    } = req.body
    console.log(param_busca)
    const query = `SELECT * FROM public."Aluno" a where matricula='${param_busca}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}


module.exports = { getUserData, getUserTopics }