const bodyParser = require('body-parser')
const dbConnection = require('./config/database')

const getTodosOsTopicos = (req, resp) => {
    const query = `SELECT * from public."Topico";`
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { getTodosOsTopicos }