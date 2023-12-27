import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  enum UserRole {
    Admin
    User
    Operator
  }

  type User {
    id: ID!
    username: String!
    password: String! 
    role: UserRole!
    subscriptions: [Subscription]
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    register(username: String!, password: String!, role: UserRole!): User
    login(username: String!, password: String!): AuthResponse
  }

  type AuthResponse {
    status: String!
    token: String
    message: String
  }
`;
