import { PrismaClient } from '../generated/prisma'

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // In development, use a global variable to prevent multiple instances during hot reloading
  const globalForPrisma = global as unknown as { prisma?: PrismaClient };
  
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  
  prisma = globalForPrisma.prisma;
}

export default prisma 