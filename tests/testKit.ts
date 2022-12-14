import "reflect-metadata";
import { graphql, GraphQLSchema, parse, subscribe } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import { createSchema } from "../src/schema";
import { db } from "../src/data-source";

type Options = {
	source: string;
	variables?: Maybe<{
		[key: string]: any;
	}>;
	isMentor?: Boolean;
	userId?: String;
	mentorId?: number;
};

type SubOptions = {
	subscription: string,
	mutation: any,
	variablesSubscription?: Maybe<{
		[key: string]: any;
	}>;
}

let schema: GraphQLSchema;

export const testMutation = async ({
	source,
	variables,
	isMentor,
	userId,
	mentorId,
}: Options) => {
	if (!schema) schema = await createSchema();

	return graphql({
		schema,
		source,
		variableValues: variables,
		contextValue: {
			db: db,
			req: {
				session: {
					isMentor: isMentor,
					userId: userId,
					mentorId: mentorId,
					destroy: jest.fn().mockImplementation((fn) => fn(false))
				},
			},
		},
	});
};

export const testSubscription = async ({ subscription, mutation, variablesSubscription}: SubOptions) => {
	if (!schema) schema = await createSchema();
	const subs = subscribe({
		schema: schema,
		document: parse(subscription),
		rootValue: mutation,
		variableValues: variablesSubscription
	})
	return subs;
}
