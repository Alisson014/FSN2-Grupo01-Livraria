const VendasModel = require('../models/vendasModel');

const vendasController = {
  async create(req, res) {
    const { id_cliente, id_livro, id_livros, titulos, quantidade_livros, preco_final } = req.body;
    try {
      const venda = await VendasModel.create({ id_cliente, id_livro, id_livros, titulos, quantidade_livros, preco_final });
      res.status(201).json(venda);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const vendas = await VendasModel.findAll();
      res.status(200).json(vendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const venda = await VendasModel.findById(Number(id));
      if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
      res.status(200).json(venda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { id_cliente, id_livro, quantidade_livros, preco_final } = req.body;
    try {
      const venda = await VendasModel.update(Number(id), { id_cliente, id_livro, quantidade_livros, preco_final });
      res.status(200).json(venda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await VendasModel.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = vendasController;