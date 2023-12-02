import {consult} from "../database/conexao.js"

class SelecaoRepositorie {
// CRUD
    create (selecao) {
        const sql = "INSERT INTO selecoes SET ?"
        return consult(sql, selecao, ' Não foi possivel Cadastrar!')
    }
    findAll () {
        const sql = "SELECT * FROM selecoes"
        return consult(sql, 'Não foi possivel Cadastrar!')
    }
    findById (id) {
        const sql = "SELECT * FROM selecoes WHERE id=?"
        return consult(sql, 'Não foi possivel Lozalizar!')
    }
    update (selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?"
        return consult(sql, [selecao, id], 'Não foi possivel Atualizar')
    }
    delete (id) {
        const sql = "DELETE FROM selecoes WHERE id=?"
        return consult(sql, id, 'Não foi possivel Apagar!')
    }
}

export default new SelecaoRepositorie()

/* NON SQL ARCHIVE FUNCTIONS
delete: 
// let index = buscaIndexSelecao(req.params.id)
        // selecoes.splice(index, 1)
        // res.send(`Time com ID: ${req.params.id} Excluído com Sucesso`)
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?"
        conexao.query(sql, id, (error, result) =>{
            if(error) {
                console.log(error)
                res.status(404).json({ 'erro' : error})
            } else {
                res.status(200).json(result)
            }
        })
*/