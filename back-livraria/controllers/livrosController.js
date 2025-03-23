const LivrosModel = require('../models/livrosModel');

const livrosController = {
  async create(req, res) {
    const { titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa } = req.body;
    try {
      const livro = await LivrosModel.create({ titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa });
      res.status(201).json(livro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const livros = await LivrosModel.findAll();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const livro = await LivrosModel.findById(Number(id));
      if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa } = req.body;
    try {
      const livro = await LivrosModel.update(Number(id), { titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa });
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await LivrosModel.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = livrosController;