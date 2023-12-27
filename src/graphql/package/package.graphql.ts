import { gql } from 'apollo-server-express';

export const packageDefs = gql`
  type Package {
    id: ID!
    name: String!
    plans: [Plan]
    channels: [Channel]
  }

  type Query {
    packages: [Package]
  }

  type Mutation {
    addPackage(name: String!, planIds: [String], channelIds: [String]): Response
  }

  type Response {
    status: String!
    data: Package
    message: String
  }
`;