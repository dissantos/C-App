const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getAtividades = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT nome_disciplina, nome_atividade, data FROM public."Atividades" a where id_matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}



module.exports = { getAtividades }