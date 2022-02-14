const bodyParser = require('body-parser')
const dbConnection = require('./config/database')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

const getForgotPassword = (req, resp) => {
    const {
        email
    } = req.body

    const token = crypto.randomBytes(20).toString('hex')
    
    const query = `
    INSERT INTO RecoverToken(token,email) 
    VALUES ('${token}','${email}');
    `
    const querySelect = `SELECT * FROM public."Aluno" a where email='${email}';`

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'web.cefet04@gmail.com',
          pass: 'webcefetCapp'
        },
        tls: {
            rejectUnauthorized: false
        }
      });
    const mailOptions = {
        from: 'web.cefet04@gmail.com',
        to: `${email}`,
        subject: 'Recuperação de senha',
        text: `
            Para recuperar sua conta, acesse o link:
            https://localhost:3000/resetPassword/token=${token}
        `
      };

    pool.query(querySelect, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        if(res.rowCount){
            pool.query(query, (e, r) => {
                if(e){
                    console.log(e)
                    console.log('Error in insert')
                }
                resp.status(200).json(r.rows)
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log('error')
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            })
        } else {
            resp.status(200).json('error')
        }
    })
}


module.exports = { getForgotPassword }