import express from 'express'
const app = express()
app.use(express.json())

const times = [
    {id: 1, nome: 'Grêmio', grupo: 'A'},
    {id: 2, nome: 'Internacional', grupo: 'A'},
    {id: 3, nome: 'Barcelona', grupo: 'A'},
    {id: 4, nome: 'Fluminense', grupo: 'A'},
    {id: 5, nome: 'Brasil', grupo: 'A'}
]

function buscarTimePorId (id) {
    return times.filter( time => time.id == id)
}

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/times', (req, res) => {
    res.status(200).send(times)
})
app.get('/times/:id', (req, res) => {
    res.json(buscarTimePorId(req.params.id))
})
app.post('/times', (req, res) => {
    times.push(req.body)
    res.status(201).send('Time cadastrado com sucesso!')
})
export default app