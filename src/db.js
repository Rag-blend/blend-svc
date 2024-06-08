var Pool = require('pg').Pool
const pool = new Pool({
    database:'postgres',
    user: 'postgres',
    password: 'Rag@123',
    port:5432,
    max:20,
    idleTimeoutMillis:1000,
    connectionTimeoutMillis:1000,
    maxUses:7500
})

module.exports=pool