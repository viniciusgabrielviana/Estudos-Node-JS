import SelecaoRepositorie from "../repositories/SelecaoRepositorie.js"

class SelecaoController {

    async index(req, res) {
        const row = await SelecaoRepositorie.findAll()
        res.json(row)
    }
    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepositorie.findById(id)
        res.json(row)
    }
    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepositorie.create(selecao)
        res.json(row)
    }
    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepositorie.update(selecao,id)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepositorie.delete(id)
        res.json(row)
    }
}

//padrao Singletown
export default new SelecaoController()