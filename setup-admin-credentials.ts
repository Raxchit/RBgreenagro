import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🔌 Connecting to database...')
  
  const email = 'admin@rbagro.com'
  const password = 'Sajan@97450'
  
  console.log('✅ Connected')
  console.log('🔄 Creating admin account...')
  
  const hashedPassword = await bcrypt.hash(password, 12)
  
  await prisma.admin.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: { email, password: hashedPassword }
  })

  console.log('\n✅ ADMIN ACCOUNT CREATED SUCCESSFULLY!')
  console.log('=======================================')
  console.log(`📧 Email:    ${email}`)
  console.log(`🔑 Password: ${password}`)
  console.log('=======================================')
  console.log('\n✅ You can now login at /admin')
}

main()
  .catch(e => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })