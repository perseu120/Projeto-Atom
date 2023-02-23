/*
  Warnings:

  - Added the required column `apelido` to the `CLIENTE` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CLIENTE" ADD COLUMN     "apelido" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AGENDAMENTO" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "observacao" TEXT NOT NULL,
    "idcliente" INTEGER NOT NULL,
    "idservico" INTEGER NOT NULL,

    CONSTRAINT "AGENDAMENTO_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AGENDAMENTO" ADD CONSTRAINT "AGENDAMENTO_idcliente_fkey" FOREIGN KEY ("idcliente") REFERENCES "CLIENTE"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AGENDAMENTO" ADD CONSTRAINT "AGENDAMENTO_idservico_fkey" FOREIGN KEY ("idservico") REFERENCES "SERVICO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
