import { gql } from 'apollo-server-express';

export const channelDefs = gql`
  type Channel {
    id: ID!
    name: String!
    packages: [Package]
  }

  type Query {
    channels: [Channel]
  }

  type Mutation {
    addChannel(name: String!): Response
  }

  type channelResponse {
    status: String!
    data: Channel
    message: String
  }
`;