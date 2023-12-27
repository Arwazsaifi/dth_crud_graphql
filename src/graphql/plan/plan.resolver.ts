import { planService } from '../plan/plan.service';

export const planResolvers = {
  Query: {
    plans: async () => await planService.getAllplans(),
  },
  Mutation: {
    addPlan: async (_, { name, durationMonths, packageId }) => {
      try {
        const plan = await planService.addPlan(name, durationMonths, packageId);

        return {
          status: 'success',
          data: plan,
          message: 'Plan added successfully',
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
