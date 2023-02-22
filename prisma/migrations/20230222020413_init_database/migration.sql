-- CreateTable
CREATE TABLE "SERVICO" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "duracao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SERVICO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CLIENTE" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,

    CONSTRAINT "CLIENTE_pkey" PRIMARY KEY ("id")
);
