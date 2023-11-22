-- CreateTable
CREATE TABLE "exercicio" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "imagem" VARCHAR(50) NOT NULL,

    CONSTRAINT "exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treino" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treino_exercicio" (
    "id" SERIAL NOT NULL,
    "treino_id" INTEGER,
    "exercicio_id" INTEGER,
    "series" INTEGER,
    "repeticoes" INTEGER,
    "tempo" TEXT,

    CONSTRAINT "treino_exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treino_matricula" (
    "id" SERIAL NOT NULL,
    "treino_id" INTEGER,
    "usuario_id" INTEGER,

    CONSTRAINT "treino_matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "altura" REAL NOT NULL,
    "peso" REAL NOT NULL,
    "data_nascimento" DATE NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "treino_exercicio" ADD CONSTRAINT "treino_exercicio_exercicio_id_fkey" FOREIGN KEY ("exercicio_id") REFERENCES "exercicio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "treino_exercicio" ADD CONSTRAINT "treino_exercicio_treino_id_fkey" FOREIGN KEY ("treino_id") REFERENCES "treino"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "treino_matricula" ADD CONSTRAINT "treino_matricula_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "treino_matricula" ADD CONSTRAINT "treino_matricula_treino_id_fkey" FOREIGN KEY ("treino_id") REFERENCES "treino"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
