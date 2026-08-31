import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { buildContext } from './graphql/context/index.js';
import { AuthResolver } from './resolvers/auth.resolver.js';
import { CategoryResolver } from './resolvers/category.resolver.js';
import { TransactionResolver } from './resolvers/transaction.resolver.js';
import { UserResolver } from './resolvers/user.resolver.js';

async function bootstrap() {
	const app = express();
	app.use(
		cors({
			origin: process.env.VITE_API_URL || 'http://localhost:5173',
			credentials: true,
		}),
	);

	const schema = await buildSchema({
		resolvers: [
			AuthResolver,
			UserResolver,
			CategoryResolver,
			TransactionResolver,
		],
		validate: false,
		emitSchemaFile: './schema.graphql',
	});

	const server = new ApolloServer({
		schema,
	});

	await server.start();

	app.use(
		'/graphql',
		express.json(),
		expressMiddleware(server, {
			context: buildContext,
		}),
	);

	const serverPort = process.env.SERVER_PORT || 4000;

	app.listen(
		{
			port: serverPort,
		},
		() => {
			console.log(`Servidor iniciado na porta ${serverPort}`);
		},
	);
}

bootstrap();
