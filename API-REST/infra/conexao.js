import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'db-times'
})

conexao.connect()

export default conexao