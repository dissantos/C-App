const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getOptativasPendentes = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT carga_horaria_opt FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const getObrigatoriasPendentes = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT carga_horaria_obrigat FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const getCoeficiente = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT coeficiente FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const getComplementarPendente = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT carga_horaria_compl FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const getTotalCurso = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT carga_horaria_total FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const getIntegralizado = (req, resp) => {
    const {
        matricula
    } = req.body
    console.log(matricula)
    const query = `SELECT percent_concluido FROM public."Aluno" a where matricula='${matricula}';`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { getOptativasPendentes, getObrigatoriasPendentes, getCoeficiente, getComplementarPendente, getTotalCurso, getIntegralizado }