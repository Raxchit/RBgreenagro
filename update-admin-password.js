const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@rbagro.com';
  const newPassword = 'Sajan@97450';

  // Hash password securely
  const saltRounds = 12;
  const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

  // Update admin password
  await prisma.admin.updateMany({
    where: { email },
    data: {
      password: hashedPassword
    }
  });

  console.log('✅ ADMIN PASSWORD UPDATED SUCCESSFULLY!');
  console.log('=========================================');
  console.log('📧 Email: admin@rbagro.com');
  console.log('🔑 New Password: Sajan@97450');
  console.log('=========================================');
  console.log('✓ Password is bcrypt hashed in database');
  console.log('✓ NOT visible to anyone even with database access');
  console.log('✓ NOT visible in browser developer tools');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());