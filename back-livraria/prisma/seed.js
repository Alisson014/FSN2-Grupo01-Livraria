// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const c1 = await prisma.cliente.create({
    data: {
        nome: "Analícia Chaves",
        email: "anali@gmail.com",
        idade: 21,
        telefone: "88 9123-4567",
        endereco: "12345-000",
        senha: "anch123",
    },
  });
  

  console.log('Comentários inseridos com sucesso:', { c1, });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*
{
        
    },
    {
        id: 1,
        nome: "João Silveira",
        coment: "Sempre incrível a escrita machadiana, muito legal e sempre com aquele ar de surpresa."
    },
    {
        id: 2,
        nome: "Maria",
        coment: "A promoção do mês passado foi muito sensacional! Li muito e consegui exemplares que estava esperando a tempos"
    },
*/