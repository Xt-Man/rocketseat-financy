import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error('DATABASE_URL deve apontar para um banco PostgreSQL.');
}

const adapter = new PrismaPg({ connectionString: databaseUrl });

export const prismaClient =
	globalForPrisma.prisma ||
	new PrismaClient({
		adapter,
	});

globalForPrisma.prisma = prismaClient;
