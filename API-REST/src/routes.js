import { Router } from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const router = Router()

//ROTAS
router.get('/selecao', SelecaoController.index) 
router.get('/selecao/:id', SelecaoController.show)
router.post('/selecao', SelecaoController.store)
router.delete('/selecao/:id', SelecaoController.delete)
router.put('/selecao/:id', SelecaoController.update)

export default router