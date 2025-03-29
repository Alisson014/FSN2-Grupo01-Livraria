const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ClienteModel = {
  async create(data) {
    return await prisma.cliente.create({ data });
  },

  async findAll() {
    return await prisma.cliente.findMany();
  },

  async findById(id) {
    return await prisma.cliente.findUnique({ where: { id } });
  },
  
  async findByEmail(email){
    return await prisma.cliente.findUnique({ where: { email } });
  },

  async update(id, data) {
    return await prisma.cliente.update({ where: { id }, data });
  },

  async delete(id) {
    return await prisma.cliente.delete({ where: { id } });
  },
};

module.exports = ClienteModel;