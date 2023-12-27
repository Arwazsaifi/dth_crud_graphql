import { gql } from 'apollo-server-express';

export const planDefs = gql`
  type Plan {
    id: ID!
    name: String!
    durationMonths: Int!
    package: Package
    subscriptions: [Subscription]
  }

  type Query {
    plans: [Plan]
  }

  type Mutation {
    addPlan(name: String!, durationMonths: Int!, packageId: String): Response
  }

  type planResponse {
    status: String!
    data: Plan
    message: String
  }
`;
