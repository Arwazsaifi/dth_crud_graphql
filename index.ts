import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import initializeDatabase from './src/database/db';
import { userResolvers } from './src/graphql/user/user.resolver';
import { userTypeDefs } from './src/graphql/user/user.graphql';
import { planDefs } from './src/graphql/plan/plan.graphql';
import { subscriptionDefs } from './src/graphql/subscription/subscription.graphql';
import { packageDefs } from './src/graphql/package/package.graphql';
import { channelDefs } from './src/graphql/channel/channel.graphql';
import { planResolvers } from './src/graphql/plan/plan.resolver';
import { subscriptionResolvers } from './src/graphql/subscription/subscription.resolver';
import { packageResolvers } from './src/graphql/package/package.resolver';
import { channelResolvers } from './src/graphql/channel/channel.resolver';

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

const start = async () => {
  await initializeDatabase();

  const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs,planDefs,subscriptionDefs,packageDefs,channelDefs],
    resolvers: [userResolvers,planResolvers,subscriptionResolvers,packageResolvers,channelResolvers],
  });

  await apolloServer.start(); 
  apolloServer.applyMiddleware({ app });

  app.listen(port, () => console.log(`Server is firing on http://localhost:${port}/graphql`));
};

start();
export { userTypeDefs, userResolvers };

