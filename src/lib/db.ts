import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
};

// ✅ Prisma 7 REQUIRES at least one option! Cannot be empty constructor!
export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: ['error']
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db