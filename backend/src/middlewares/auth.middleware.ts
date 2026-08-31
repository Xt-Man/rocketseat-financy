import { GraphQLContext } from '../graphql/context/index.js';
import { MiddlewareFn } from 'type-graphql';


export const IsAuth: MiddlewareFn<GraphQLContext> = async (
	{ context },
	next,
) => {
	if (!context.user) {
		throw new Error('Not authenticated');
	}
	return next();
};
