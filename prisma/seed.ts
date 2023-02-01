import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // realiza a conexão com banco de dados;

async function main() {
  await prisma.habit.deleteMany()

  await prisma.habit.create({
    data: {
      title: 'Passear com os cães',
      created_at: new Date()
    }
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
