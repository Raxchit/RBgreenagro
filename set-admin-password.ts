import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import * as readline from 'node:readline/promises'

const prisma = new PrismaClient()

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  console.log('🔑 SET NEW ADMIN PASSWORD')
  console.log('=========================\n')
  
  const email = 'admin@rbagro.com'
  const newPassword = await rl.question('Enter NEW admin password: ')
  
  if (newPassword.length < 8) {
    console.log('❌ Password must be at least 8 characters')
    process.exit(1)
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12)
  
  await prisma.admin.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: { email, password: hashedPassword }
  })

  console.log('\n✅ ADMIN PASSWORD UPDATED SUCCESSFULLY!')
  console.log('=======================================')
  console.log(`📧 Email:    ${email}`)
  console.log(`🔑 Password: ${newPassword}`)
  console.log('=======================================')
  console.log('\n✅ You can now login at /admin with these credentials')
  
  rl.close()
}

main()
  .catch(e => console.error('Error:', e))
  .finally(async () => await prisma.$disconnect())