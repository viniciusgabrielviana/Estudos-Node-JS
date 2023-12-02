import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()
app.use(express.json())

// retornar o objeto por id
function buscarSelecaoPorId (id) {
    return selecoes.filter( selecao => selecao.id == id)
}
//pegar a posição ou index do elemento no array por id
function buscaIndexSelecao (id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//ROTAS
app.get('/selecao', (req, res) => {
    // res.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes"
    conexao.query(sql, (error, result) =>{
        if(error) {
            console.log(error)
            res.status(404).json({ 'erro' : `dados não localizados - ${error}`})
        } else {
            res.status(200).json(result)
        }
    })
})
app.get('/selecao/:id', (req, res) => {
    //res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?"
    conexao.query(sql, id, (error, result) =>{
        const row = result[0]
        if(error) {
            console.log(error)
            res.status(404).json({ 'erro' : `dados não localizados - ${error}`})
        } else {
            res.status(200).json(row)
        }
    })
})
app.post('/selecao', (req, res) => {
    // selecoes.push(req.body)
    // res.status(201).send('Seleção cadastrado com sucesso!')
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?"
    conexao.query(sql, selecao, (error, result) =>{
        if(error) {
            console.log(error)
            res.status(400).json({ 'erro' : `dados não localizados - ${error}`})
        } else {
            res.status(201).json(result)
        }
    })
})
app.delete('/selecao/:id', (req, res) =>{
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
})
app.put('/selecao/:id', (req, res) =>{
    // let index = buscaIndexSelecao(req.params.id)
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)
    // res.send(`Time com ID: ${req.params.id} Excluído com Sucesso`)
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?"
    conexao.query(sql, [selecao, id], (error, result) =>{ //parametros = ? do sql
        if(error) {
            console.log(error)
            res.status(400).json({ 'erro' : `dados não localizados - ${error}`})
        } else {
            res.status(200).json(result)
        }
    })
})

export default app