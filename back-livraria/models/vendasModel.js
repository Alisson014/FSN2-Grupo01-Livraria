const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const VendasModel = {
  async create(data) {
    return await prisma.vendas.create({ data });
  },

  async findAll() {
    return await prisma.vendas.findMany();
  },

  async findById(id) {
    return await prisma.vendas.findUnique({ where: { id } });
  },

  async update(id, data) {
    return await prisma.vendas.update({ where: { id }, data });
  },

  async delete(id) {
    return await prisma.vendas.delete({ where: { id } });
  },
};

module.exports = VendasModel;