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

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })