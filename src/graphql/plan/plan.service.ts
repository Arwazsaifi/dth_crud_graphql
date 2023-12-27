// services/plan.service.ts
import { PlanDao } from '../plan/plan.dao';

class PlanService {
  private planDao: PlanDao;

  constructor() {
    this.planDao = new PlanDao();
  }

  async addPlan(name: string, durationMonths: number, packageId: string) {
    return await this.planDao.addPlan(name, durationMonths, packageId);
  }

  async getAllplans() {
    return await this.planDao.getAllplans();
  }
}

export const planService = new PlanService();
