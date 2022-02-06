const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getDadosAcademicos = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT carga_horaria_opt, carga_horaria_obrigat, coeficiente, carga_horaria_compl, carga_horaria_total, percent_concluido FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}



module.exports = { getDadosAcademicos }