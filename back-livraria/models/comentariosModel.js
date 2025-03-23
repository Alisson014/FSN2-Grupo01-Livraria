const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ComentariosModel = {
  async create(data) {
    return await prisma.comentarios.create({ data });
  },

  async findAll() {
    return await prisma.comentarios.findMany();
  },

  async findById(id) {
    return await prisma.comentarios.findUnique({ where: { id } });
  },

  async update(id, data) {
    return await prisma.comentarios.update({ where: { id }, data });
  },

  async delete(id) {
    return await prisma.comentarios.delete({ where: { id } });
  },
};

module.exports = ComentariosModel;