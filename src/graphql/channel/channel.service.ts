import { ChannelDao } from '../channel/channel.dao';

class ChannelService {
  private channelDao: ChannelDao;

  constructor() {
    this.channelDao = new ChannelDao();
  }

  async addChannel(name: string) {
    return await this.channelDao.addChannel(name);
  }

  async getAllChannels() {
    return await this.channelDao.getAllChannels();
  }
}

export const channelService = new ChannelService();