import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Testing database connection...')
  
  try {
    // Test connection
    await prisma.$connect()
    console.log('✅ Database connected SUCCESSFULLY!')
    
    // Check Admin table
    const adminCount = await prisma.admin.count()
    console.log(`📊 Found ${adminCount} admin accounts in database`)
    
    if (adminCount === 0) {
      console.log('\n⚠️ No admin accounts found! Creating default admin...')
      
      const email = 'admin@rbagro.com'
      const password = 'Admin@123456'
      const hashedPassword = await bcrypt.hash(password, 12)
      
      await prisma.admin.create({
        data: {
          email,
          password: hashedPassword
        }
      })
      
      console.log('\n✅ DEFAULT ADMIN ACCOUNT CREATED!')
      console.log('================================')
      console.log(`📧 Email:    ${email}`)
      console.log(`🔑 Password: ${password}`)
      console.log('================================\n')
      console.log('You can now login at /admin with these credentials')
      console.log('⚠️ CHANGE THIS PASSWORD AFTER FIRST LOGIN!')
    } else {
      // List existing admins
      const admins = await prisma.admin.findMany({
        select: { id: true, email: true, createdAt: true }
      })
      console.log('\n📋 Existing admin accounts:')
      admins.forEach((admin, i) => {
        console.log(`  ${i+1}. ${admin.email} (created: ${admin.createdAt.toLocaleDateString()})`)
      })
    }
    
  } catch (error) {
    console.error('❌ Database ERROR:', error.message)
    console.log('\n💡 Troubleshooting:')
    console.log('1. Check DATABASE_URL in .env file')
    console.log('2. Make sure Supabase database is running')
    console.log('3. Run: bunx prisma migrate deploy')
    console.log('4. Run: bunx prisma generate')
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()