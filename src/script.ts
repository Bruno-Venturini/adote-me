const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.usuario.create({
        data: {
            nome: 'Alice',
            usuario: 'Alice',
            endereco: 'Alice',
            senha: 'Alice',
            email: 'alice@prisma.io',
        },
    })


    const users = await prisma.usuario.findMany()
}

export async function cadastroUsuario (nome: string, usuario: string, email: string, nascimento: Date, endereco: string, senha: string, representacao: string) {
    const users = await prisma.usuario.findMany();
    
    await prisma.usuario.create({
        data: {
            nome: nome,
            usuario: usuario,
            email: email,
            nascimento: nascimento,
            endereco: endereco,
            senha: senha,
            representacao: representacao
        },
    })
}

export async function cadastroAnimal (nome: string, tipoanimal: string, raca: string, sexo: string, descricao: string, anos: number) {
    const users = await prisma.usuario.findMany();
    
    await prisma.animal.create({
        data: {
            nome: nome,
            tipoanimal: tipoanimal,
            raca: raca,
            sexo: sexo,
            descricao: descricao,
            anos: anos
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })