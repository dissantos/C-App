const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const setUser = (req, resp) => {
    const {
        user,
        password,
        email,
        name,
        matricula,
        curso,
        ano,
        carga_horaria_opt,
        carga_horaria_comp,
        carga_horaria_obg,
        coef,
        url
    } = req.body
    const query = `
    INSERT INTO public."Aluno"(nome,nome_completo,email, matricula, curso, ano_entrada, id_topic, id_msg, carga_horaria_opt, carga_horaria_compl, carga_horaria_obrigat, carga_horaria_total, percent_concluido,coeficiente,senha, url) 
    VALUES ('${user}','${name}','${email}','${matricula}','${curso}','${ano}','${matricula}','${matricula}','${carga_horaria_opt}','${carga_horaria_comp}','${carga_horaria_obg}','${(carga_horaria_obg + carga_horaria_comp + carga_horaria_opt)}','${(carga_horaria_obg + carga_horaria_comp + carga_horaria_opt)*100/4380}','${coef}','${password}', '${url}');
    `
    const querySelect = `SELECT * FROM public."Aluno" a where nome='${user}' or matricula='${matricula}';`
    pool.query(querySelect, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        console.log(res)
        if(!res.rowCount){
            pool.query(query, (e, r) => {
                if(e){
                    console.log(e)
                    console.log('Error in insert')
                }
                resp.status(200).json(r.rows)
            })
        } else {
            resp.status(200).json('error')
        }
    })
}


module.exports = { setUser }