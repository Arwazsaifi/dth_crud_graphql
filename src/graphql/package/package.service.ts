import { PackageDao } from '../package/package.dao';

class PackageService {
  private packageDao: PackageDao;

  constructor() {
    this.packageDao = new PackageDao();
  }

  async addPackage(name: string, planIds: string[], channelIds: string[]) {
    return await this.packageDao.addPackage(name, planIds, channelIds);
  }

  async getAllPackages() {
    return await this.packageDao.getAllPackages();
  }
}

export const packageService = new PackageService();