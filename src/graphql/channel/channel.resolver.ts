import { channelService } from '../channel/channel.service';

export const channelResolvers = {
  Query: {
    channels: async () => await channelService.getAllChannels(),
  },
  Mutation: {
    addChannel: async (_, { name }) => {
      try {
        const channel_data = await channelService.addChannel(name);
        return {
          status: 'success',
          data: channel_data,
          message: 'Channel added successfully',
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