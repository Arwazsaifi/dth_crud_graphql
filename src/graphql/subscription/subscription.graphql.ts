import { gql } from 'apollo-server-express';
export const subscriptionDefs = gql`
type Subscription {
  id: ID!
  startDate: String!
  endDate: String!
  user: User
  plan: Plan
}

type Query {
  subscriptions: [Subscription]
}

type Mutation {
  addSubscription(startDate: String!, endDate: String!, userId: String, planId: String): Response
}

type subsResponse {
  status: String!
  data: Subscription
  message: String
}
`