/*
  Warnings:

  - Added the required column `id_livros` to the `Vendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulos` to the `Vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendas" ADD COLUMN     "id_livros" TEXT NOT NULL,
ADD COLUMN     "titulos" TEXT NOT NULL;
