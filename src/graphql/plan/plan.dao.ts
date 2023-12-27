// dao/plan.dao.ts
import AppDataSource from '../../config/dataSource';
import { Plan } from '../plan/plan.entity';
import { Package } from '../package/package.entity';

export class PlanDao {
  private planRepository = AppDataSource.getRepository(Plan);
  private packageRepository = AppDataSource.getRepository(Package);

  async addPlan(name: string, durationMonths: number, packageId: string): Promise<Plan> {
    const plan = this.planRepository.create({
      name: name,
      durationMonths: durationMonths,
    });

    if (packageId) {
      const packageEntity = await this.packageRepository.findOne({ where: { id: packageId } });
      plan.package = packageEntity;
    }

    return await this.planRepository.save(plan);
  }

  async getAllplans(): Promise<Plan[]> {
    return await this.planRepository.find();
  }
}
