import { CreateTransactionInput, EditTransactionInput } from '../dtos/input/transaction.input.js';
import { GqlUser } from '../graphql/decorators/user.decorator.js';
import { IsAuth } from '../middlewares/auth.middleware.js';
import { CategoryModel } from '../models/category.model.js';
import { TransactionModel } from '../models/transaction.model.js';
import { UserModel } from '../models/user.model.js';
import { CategoryService } from '../services/category.service.js';
import { TransactionService } from '../services/transaction.service.js';
import { UserService } from '../services/user.service.js';
import {
	Arg,
	FieldResolver,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';


@Resolver(() => TransactionModel)
@UseMiddleware(IsAuth)
export class TransactionResolver {
	private transactionService = new TransactionService();
	private userService = new UserService();
	private categoryService = new CategoryService();

	@Mutation(() => TransactionModel)
	async createTransaction(
		@Arg('data', () => CreateTransactionInput) data: CreateTransactionInput,
		@GqlUser() user: UserModel,
	): Promise<TransactionModel> {
		return this.transactionService.createTransaction(data, user.id);
	}

	@Mutation(() => TransactionModel)
	async editTransaction(
		@Arg('data', () => EditTransactionInput) data: EditTransactionInput,
		@GqlUser() user: UserModel,
	): Promise<TransactionModel> {
		return this.transactionService.editTransaction(data, user.id);
	}

	@Query(() => [TransactionModel])
	async listTransactionsByUser(
		@GqlUser() user: UserModel,
	): Promise<TransactionModel[]> {
		return this.transactionService.listTransactionsByUser(user.id);
	}

	@Mutation(() => Boolean)
	async deleteTransaction(
		@Arg('id', () => String) id: string,
		@GqlUser() user: UserModel,
	): Promise<boolean> {
		return this.transactionService.deleteTransaction(id, user.id);
	}

	@FieldResolver(() => UserModel)
	async user(@Root() transaction: TransactionModel): Promise<UserModel> {
		if (transaction.user) {
			return transaction.user;
		}

		return this.userService.findUser(transaction.userId);
	}

	@FieldResolver(() => CategoryModel)
	async category(
		@Root() transaction: TransactionModel,
		@GqlUser() user: UserModel,
	): Promise<CategoryModel> {
		if (transaction.category) {
			return transaction.category;
		}

		return this.categoryService.findCategory(transaction.categoryId, user.id);
	}
}
