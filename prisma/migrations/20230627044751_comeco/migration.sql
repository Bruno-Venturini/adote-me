-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "descricao" TEXT,
    "anos_idade" TEXT NOT NULL,
    "id_dono" INTEGER NOT NULL,
    CONSTRAINT "Animal_id_dono_fkey" FOREIGN KEY ("id_dono") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_nasc" DATETIME,
    "endereco" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
