import { prismaClient } from '../../prisma/prisma.js';
import { CreateTransactionInput, EditTransactionInput } from '../dtos/input/transaction.input.js';

export class TransactionService {
	async createTransaction(data: CreateTransactionInput, userId: string) {
		return prismaClient.transaction.create({
			data: {
				amount: data.amount,
				description: data.description,
				date: data.date,
				categoryId: data.categoryId,
				userId: userId,
			},
		});
	}

	async editTransaction(data: EditTransactionInput, userId: string) {
		const transaction = await prismaClient.transaction.findFirst({
			where: { id: data.id, userId: userId },
		});

		if (!transaction) {
			throw new Error('Transaction not found');
		}

		return prismaClient.transaction.update({
			where: { id: data.id, userId: userId },
			data: {
				amount: data.amount,
				description: data.description,
				date: data.date,
				categoryId: data.categoryId,
			},
		});
	}

	async deleteTransaction(id: string, userId: string) {
		const transaction = await prismaClient.transaction.findFirst({
			where: { id: id, userId: userId },
		});

		if (!transaction) {
			throw new Error('Transaction not found');
		}

		await prismaClient.transaction.delete({
			where: { id: id, userId: userId },
		});

		return true;
	}

	async listTransactionsByUser(userId: string) {
		return prismaClient.transaction.findMany({
			where: { userId: userId },
			orderBy: { date: 'desc' },
			include: {
				category: true,
				user: true,
			},
		});
	}
}
