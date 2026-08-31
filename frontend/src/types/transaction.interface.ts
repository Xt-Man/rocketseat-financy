import type { Category } from './category.interface';

export interface Transaction {
	id: string;
	amount: number;
	description?: string;
	date: string;
	createdAt: string;
	updatedAt: string;
	category: Category;
}
