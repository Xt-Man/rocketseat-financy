import { prismaClient } from '../../prisma/prisma.js';
import { CreateUserInput, EditUserInput } from '../dtos/input/user.input.js';

export class UserService {
	async findUser(id: string) {
		const user = await prismaClient.user.findUnique({
			where: { id },
		});

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}

	async createUser(data: CreateUserInput) {
		const findUser = await prismaClient.user.findUnique({
			where: { email: data.email },
		});

		if (findUser) {
			throw new Error('Email already in use');
		}

		const user = await prismaClient.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
			},
		});

		return user;
	}

	async editUser(data: EditUserInput) {
		const findUser = await prismaClient.user.findUnique({
			where: { id: data.id },
		});

		if (!findUser) {
			throw new Error('User not found');
		}

		const user = await prismaClient.user.update({
			where: { id: data.id },
			data: {
				name: data.name,
			},
		});

		return user;
	}
}
