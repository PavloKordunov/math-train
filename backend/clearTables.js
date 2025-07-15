import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.student.deleteMany({})
    console.log('Усі дані у таблиці видалено!')
}

main()
    .catch((e) => console.error('Помилка:', e))
    .finally(() => prisma.$disconnect())
