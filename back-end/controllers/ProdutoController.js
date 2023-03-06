const Produto = require("../models/Produto");

class ProdutoController {
  async listarProdutos(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (error) {
      console.error(`Erro ao buscar produtos ${error}`);
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  async listarProduto(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      return res.json(produto);
    } catch (error) {
      console.error(`Erro ao buscar produto ${error}`);
      res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }

  async cadastrarProdutos(req, res) {
    try {
      const produto = await Produto.create(req.body);
      return res.json(produto);
    } catch (error) {
      console.error(`Erro ao cadastar produto ${error}`);
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  }

  async atualizarProduto(req, res) {
    try {
      const { id, name, description, price } = req.body;
      const produto = await Produto.update({
        name: name,
        description: description,
        price: price
      }, { where: { id: id } })
      return res.json(produto)

    } catch (error) {
      console.error(`Erro ao atualizar produto ${error}`);
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

  async deletarProduto(req, res) {
    try {
      const id = req.body.id;
      const produto = await Produto.destroy({
        where: { id: id }
      });
      return res.json(produto);
    } catch (error) {
      console.error(`Erro ao deletar produto ${error}`);
      res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
}

module.exports = new ProdutoController;