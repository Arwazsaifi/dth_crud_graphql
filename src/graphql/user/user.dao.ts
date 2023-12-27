// user.dao.ts
import bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UserRole } from '../../utils/enum';
import AppDataSource from '../../config/dataSource';

export class UserDao {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(username: string, password: string, role: UserRole): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      username: username,
      password: hashedPassword,
      role: role as UserRole,
    });

    return await this.userRepository.save(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ username });
  }

  async getUser(id: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ id });
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}



// user/user.resolvers.ts
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


// how to hit request on postman using graphql for following resolvers

// ChatGPT
// To use Postman to test the GraphQL resolvers you've defined, follow these steps:

// Setting Up Postman for GraphQL
// Open Postman: Start Postman on your computer.

// Create a New Request: Click on the "New" button and select "Request".

// Set Request Type to POST: GraphQL requests are typically sent as POST requests.

// Enter the GraphQL Endpoint: In the request URL field, enter the URL of your GraphQL server.

// Set the Body Type to GraphQL: In the request body section, select "GraphQL" from the available options.

// Sending Queries and Mutations
// For Queries:
// Set Query Request:
// For fetching a single user, your request body will look like this:
// graphql
// Copy code
// query GetUser($id: ID!) {
//   user(id: $id) {
//     // specify the fields you want to fetch, e.g., id, username, etc.
//   }
// }
// For fetching multiple users:
// graphql
// Copy code
// query GetUsers {
//   users {
//     // specify the fields you want to fetch
//   }
// }
// Add variables in the "GraphQL Variables" section if needed (like the user ID).
// For Mutations:
// Set Mutation Request:
// For registration:
// graphql
// Copy code
// mutation Register($username: String!, $password: String!, $role: String!) {
//   register(username: $username, password: $password, role: $role) {
//     status
//     data {
//       // fields of the user
//     }
//     message
//   }
// }
// For login:
// graphql
// Copy code
// mutation Login($username: String!, $password: String!) {
//   login(username: $username, password: $password) {
//     status
//     token
//   }
// }
// Add variables in the "GraphQL Variables" section for the mutation inputs (like username, password, etc.).
// Headers and Authentication
// If your GraphQL API requires authentication, make sure to include the necessary headers. For instance, if it uses a bearer token, add an Authorization header with the token.
// Other headers like Content-Type: application/json may be set by default in Postman when you select the GraphQL body type.
// Sending the Request
// After setting up your request, click the "Send" button to execute it.
// The response will be displayed in the lower section of the Postman window.
// Example GraphQL Variables
// For sending variables with your requests, you'll format them in JSON in the "GraphQL Variables" section. For example:

// json
// Copy code
// {
//   "id": "123",
//   "username": "testuser",
//   "password": "password123",
//   "role": "user"
// }