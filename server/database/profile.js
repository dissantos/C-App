const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getUserData = (req, resp) => {
    const {
        nome,
        senha
    } = req.body
    const query = `SELECT nome,nome_completo,email,matricula,curso,ano_entrada,id_topic,id_msg,carga_horaria_opt,carga_horaria_compl,carga_horaria_obrigat,carga_horaria_total,percent_concluido,coeficiente,senha FROM public."Aluno" a where nome='${nome}' and senha='${senha}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}


module.exports = { getUserData }