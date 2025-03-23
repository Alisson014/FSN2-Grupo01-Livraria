const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const LivrosModel = {
  async create(data) {
    return await prisma.livros.create({ data });
  },

  async findAll() {
    return await prisma.livros.findMany();
  },

  async findById(id) {
    return await prisma.livros.findUnique({ where: { id } });
  },

  async update(id, data) {
    return await prisma.livros.update({ where: { id }, data });
  },

  async delete(id) {
    return await prisma.livros.delete({ where: { id } });
  },
};

module.exports = LivrosModel;