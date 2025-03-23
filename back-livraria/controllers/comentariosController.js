const ComentariosModel = require('../models/comentariosModel');

const comentariosController = {
  async create(req, res) {
    const { comentario, id_cliente } = req.body;
    try {
      const comentarioCriado = await ComentariosModel.create({ comentario, id_cliente });
      res.status(201).json(comentarioCriado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const comentarios = await ComentariosModel.findAll();
      res.status(200).json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const comentario = await ComentariosModel.findById(Number(id));
      if (!comentario) return res.status(404).json({ error: 'Comentário não encontrado' });
      res.status(200).json(comentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { comentario, id_cliente } = req.body;
    try {
      const comentarioAtualizado = await ComentariosModel.update(Number(id), { comentario, id_cliente });
      res.status(200).json(comentarioAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await ComentariosModel.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = comentariosController;