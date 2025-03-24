const LivrosModel = require('../models/livrosModel');

const livrosController = {
  async create(req, res) {
    // const { titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa } = req.body;
    const dataLivro = req.body;
    
    try {
      const livro = await LivrosModel.create({titulo: dataLivro.titulo, autor: dataLivro.autor, preco: Number(dataLivro.preco), quantidade_estoque: Number(dataLivro.quantidade_estoque), descricao: dataLivro.descricao, resumo: dataLivro.resumo, categoria: dataLivro.categoria, data_publicacao: new Date(dataLivro.data_publicacao), imagem_capa: dataLivro.imagem_capa});
      res.status(201).json(livro);
    } catch (error) {
      console.error(error);
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
    if (id !== 'GetCategorias' ) { 
      try {
        const livro = await LivrosModel.findById(Number(id));
        if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
        res.status(200).json(livro);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    }else{
      try{
        const livros = await LivrosModel.findAll();
        var categorias = [livros[0].categoria];
        livros.forEach( l => {
          if (!categorias.includes(l.categoria)) { categorias.push(l.categoria) }
        });
        var livrosCategorias = []; 
        categorias.forEach( c => {
          let lc = [];
          livros.forEach( l => {
            if (l.categoria === c ) { lc.push(l) }
          });
          livrosCategorias.push(lc);
        });
        res.status(200).json(livrosCategorias);
  
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }

    }
  },

  async update(req, res) {
    const { id } = req.params;
    // const { titulo, autor, preco, quantidade_estoque, descricao, resumo, categoria, data_publicacao, imagem_capa } = req.body;
    const dataLivro = req.body;
    try {
      const livro = await LivrosModel.update(Number(id), {titulo: dataLivro.titulo, autor: dataLivro.autor, preco: Number(dataLivro.preco), quantidade_estoque: Number(dataLivro.quantidade_estoque), descricao: dataLivro.descricao, resumo: dataLivro.resumo, categoria: dataLivro.categoria, imagem_capa: dataLivro.imagem_capa});
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