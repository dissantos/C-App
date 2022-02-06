const { Pool } = require('pg')

pool = new Pool({
    host: 'ec2-44-193-188-118.compute-1.amazonaws.com',
    port: 5432,
    database: 'd8rlibvna2m1tk',
    user: 'riffbhxwrdauap',
    password: '4f96a342dc6f69c7ca1692dc1662226a718bd5e6fcbd2fecf66e3c42f4a67b4d',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool