// dao/subscription.dao.ts
import AppDataSource from '../../config/dataSource';
import { Subscription } from '../subscription/subscription.entity';
import { User } from '../user/user.entity';
import { Plan } from '../plan/plan.entity';

export class SubscriptionDao {
  private subscriptionRepository = AppDataSource.getRepository(Subscription);
  private userRepository = AppDataSource.getRepository(User);
  private planRepository = AppDataSource.getRepository(Plan);

  async addSubscription(startDate: Date, endDate: Date, userId: string, planId: string): Promise<Subscription> {
    const subscription = this.subscriptionRepository.create({
      startDate: startDate,
      endDate: endDate,
    });

    if (userId) {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      subscription.user = user;
    }

    if (planId) {
      const plan = await this.planRepository.findOne({ where: { id: planId } });
      subscription.plan = plan;
    }

    return await this.subscriptionRepository.save(subscription);
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return await this.subscriptionRepository.find({
      relations: ['user', 'plan'],
    });
  }
}
