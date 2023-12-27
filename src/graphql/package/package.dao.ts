// dao/package.dao.ts
import AppDataSource from '../../config/dataSource';
import { Package } from '../package/package.entity';
import { Plan } from '../plan/plan.entity';
import { Channel } from '../channel/channel.entity';

export class PackageDao {
  private packageRepository = AppDataSource.getRepository(Package);
  private planRepository = AppDataSource.getRepository(Plan);
  private channelRepository = AppDataSource.getRepository(Channel);

  async addPackage(name: string, planIds: string[], channelIds: string[]): Promise<Package> {
    const packageData = this.packageRepository.create({
      name: name,
    });

    if (planIds) {
      const plans = await this.planRepository.find({
        where: planIds.map((id) => ({ id })),
      });
      packageData.plans = plans;
    }

    if (channelIds) {
      const channels = await this.channelRepository.find({
        where: channelIds.map((id) => ({ id })),
      });
      packageData.channels = channels;
    }

    return await this.packageRepository.save(packageData);
  }

  async getAllPackages(): Promise<Package[]> {
    return await this.packageRepository.find({
      relations: ['plans', 'channels'],
    });
  }
}
