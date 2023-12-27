// resolvers/subscription.resolvers.ts
import { subscriptionService } from '../subscription/subscription.service';

export const subscriptionResolvers = {
  Query: {
    subscriptions: async () => await subscriptionService.getAllSubscriptions(),
  },
  Mutation: {
    addSubscription: async (_, { startDate, endDate, userId, planId }) => {
      try {
        const subscription = await subscriptionService.addSubscription(
          new Date(startDate),
          new Date(endDate),
          userId,
          planId
        );

        return {
          status: 'success',
          data: subscription,
          message: 'Subscription added successfully',
        };
      } catch (error) {
        return {
          status: 'error',
          data: null,
          message: error.message,
        };
      }
    },
  },
};
