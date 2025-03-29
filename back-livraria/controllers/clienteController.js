const ClienteModel = require('../models/clienteModel');

const clienteController = {
  async create(req, res) {
    const { nome, email, idade, telefone, endereco, senha } = req.body;
    try {
      const cliente = await ClienteModel.create({ nome, email, idade, telefone, endereco, senha });
      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const clientes = await ClienteModel.findAll();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {

      if (id.includes('@')){
        const cliente = await ClienteModel.findByEmail(id);
        if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.status(200).json(cliente);
      } else{
        const cliente = await ClienteModel.findById(Number(id));
        if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.status(200).json(cliente);
      }

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, idade, telefone, endereco, senha } = req.body;
    try {
      const cliente = await ClienteModel.update(Number(id), { nome, email, idade, telefone, endereco, senha });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await ClienteModel.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clienteController;