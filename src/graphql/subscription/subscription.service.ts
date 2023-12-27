// services/subscription.service.ts
import { SubscriptionDao } from '../subscription/subscription.dao';

class SubscriptionService {
  private subscriptionDao: SubscriptionDao;

  constructor() {
    this.subscriptionDao = new SubscriptionDao();
  }

  async addSubscription(startDate: Date, endDate: Date, userId: string, planId: string) {
    return await this.subscriptionDao.addSubscription(startDate, endDate, userId, planId);
  }

  async getAllSubscriptions() {
    return await this.subscriptionDao.getAllSubscriptions();
  }
}

export const subscriptionService = new SubscriptionService();
