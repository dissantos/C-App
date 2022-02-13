const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getUser = (req, resp) => {
    const {
        matricula
    } = req.body
    const query = `SELECT nome,nome_completo,email,matricula,curso,ano_entrada,id_topic,id_msg,carga_horaria_opt,carga_horaria_compl,carga_horaria_obrigat,carga_horaria_total,percent_concluido,coeficiente,senha,url FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        if(res.rowCount){
            resp.status(200).json(res.rows)
        } else {
            resp.status(409).json('error')
        }
    })
}


module.exports = { getUser }