import { PubSub } from 'graphql-subscriptions';

import { buildSchema } from "type-graphql";

import { CommonResolver } from "./resolvers/common.resolver";
import { MentorResolver } from "./resolvers/mentor.resolver";
import { MessageResolver } from "./resolvers/message.resolver";
import { UserResolver } from "./resolvers/user.resolver";
import { GoogleAuthResolver } from "./resolvers/googleAuth.resolver";
import { __local__ } from "./constants";
import { TwitterAuthResolver } from './resolvers/twitterAuth.resolver';
import { GithubAuthResolver } from './resolvers/githubAuth.resolver';

//Previously was using Redis PubSubEngine
export const pubSub = new PubSub();

export const createSchema = () => buildSchema({
  resolvers: [UserResolver, MentorResolver, CommonResolver, MessageResolver, GoogleAuthResolver, TwitterAuthResolver, GithubAuthResolver],
  validate: false,
  pubSub: pubSub,
});