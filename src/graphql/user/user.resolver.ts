import { userService } from '../user/user.service';

export const userResolvers = {
  Query: {
    user: async (_, { id }) => await userService.getUser(id),
    users: async () => await userService.getUsers(),
  },
  Mutation: {
    register: async (_, { username, password, role }) => {
      try {
        const user = await userService.createUser(username, password, role);
        return {
          status: 'success',
          data: user,
          message: 'User registered successfully',
        };
      } catch (error) {
        return {
          status: 'error',
          data: null,
          message: error.message,
        };
      }
    },
    login: async (_, { username, password }) => {
      try {
        const token = await userService.login(username, password);
        return {
          status: 'success',
          token,
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
