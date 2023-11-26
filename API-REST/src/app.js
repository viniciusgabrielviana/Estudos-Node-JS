import express from 'express'
const app = express()
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Grêmio', grupo: 'A'},
    {id: 2, selecao: 'Internacional', grupo: 'A'},
    {id: 3, selecao: 'Barcelona', grupo: 'A'},
    {id: 4, selecao: 'Fluminense', grupo: 'A'},
    {id: 5, selecao: 'Brasil', grupo: 'A'}
]

// retornar o objeto por id
function buscarSelecaoPorId (id) {
    return selecoes.filter( selecao => selecao.id == id)
}
//pegar a posição ou index do elemento no array por id
function buscaIndexSelecao (id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/selecao', (req, res) => {
    res.status(200).send(selecoes)
})
app.get('/selecao/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})
app.post('/selecao', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrado com sucesso!')
})
app.delete('/selecao/:id', (req, res) =>{
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Time com ID: ${req.params.id} Excluído com Sucesso`)
})
app.put('/selecao/:id', (req, res) =>{
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
    // res.send(`Time com ID: ${req.params.id} Excluído com Sucesso`)
})
export default app