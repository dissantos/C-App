const bodyParser = require('body-parser')
const dbConnection = require('./config/database')


const getResetPassword = (req, resp) => {
    const {
        token,
        password
    } = req.body    
    
    const querySelect = `SELECT * FROM RecoverToken where token='${token}';`

    
    pool.query(querySelect, (err, res) => {
        if (err) {
            console.log(err)
            console.log('Erro!!!')
        }
        if(res.rowCount){

            const query = `
            UPDATE public."Aluno" SET senha='${password}' WHERE email='${res.rows[0].email}' ;
            DELETE from RecoverToken where email='${res.rows[0].email}';
            `
            //
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


module.exports = { getResetPassword }