const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();
const clienteRoutes = require('./routes/clienteRoutes');
const vendasRoutes = require('./routes/vendasRoutes');
const livrosRoutes = require('./routes/livrosRoutes');
const comentariosRoutes = require('./routes/comentariosRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/api/clientes', clienteRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/livros', livrosRoutes);
app.use('/api/comentarios', comentariosRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});