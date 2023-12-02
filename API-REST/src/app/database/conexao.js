import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'db-times'
})

conexao.connect()

/**
 * Executa um Código SQL com ou sem valores
 * @param {string} sql Instrução SQL a ser executada
 * @param {string=id | [selecao,id]} values Valores a serem passados para o SQL 
 * @param {String} msgReject Mensagem a ser Exibida
 * @returns objeto da promise
 */
export const consult = (sql, values='', msgReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result)=> {
            if (error) return reject(msgReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao