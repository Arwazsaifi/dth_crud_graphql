import { packageService } from '../package/package.service';

export const packageResolvers = {
  Query: {
    packages: async () => await packageService.getAllPackages(),
  },
  Mutation: {
    addPackage: async (_, { name, planIds, channelIds }) => {
      try {
        const packageData = await packageService.addPackage(name, planIds, channelIds);

        return {
          status: 'success',
          data: packageData,
          message: 'Package added successfully',
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