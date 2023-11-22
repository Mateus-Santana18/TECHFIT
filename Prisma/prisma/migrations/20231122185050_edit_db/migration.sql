/*
  Warnings:

  - You are about to drop the `exercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treino_exercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treino_matricula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "treino_exercicio" DROP CONSTRAINT "treino_exercicio_exercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "treino_exercicio" DROP CONSTRAINT "treino_exercicio_treino_id_fkey";

-- DropForeignKey
ALTER TABLE "treino_matricula" DROP CONSTRAINT "treino_matricula_treino_id_fkey";

-- DropForeignKey
ALTER TABLE "treino_matricula" DROP CONSTRAINT "treino_matricula_usuario_id_fkey";

-- DropTable
DROP TABLE "exercicio";

-- DropTable
DROP TABLE "treino";

-- DropTable
DROP TABLE "treino_exercicio";

-- DropTable
DROP TABLE "treino_matricula";
