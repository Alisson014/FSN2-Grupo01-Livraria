/*
  Warnings:

  - Added the required column `senha` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Livros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumo` to the `Livros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Livros" ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "resumo" TEXT NOT NULL,
ALTER COLUMN "imagem_capa" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
