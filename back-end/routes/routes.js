const express = require("express");
const ProdutoController = require("../controllers/ProdutoController");
const Produto = require("../models/Produto");

const router = express.Router();

router.get('/produtos', ProdutoController.listarProdutos);
router.get('/produto/:id', ProdutoController.listarProduto);
router.post('/produto', ProdutoController.cadastrarProdutos);
router.post('/produto/update', ProdutoController.atualizarProduto);
router.delete('/produto/delete/:id', ProdutoController.deletarProduto);

module.exports = router;
