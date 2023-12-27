
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserRole } from '../../utils/enum';
import { Subscription } from '../subscription/subscription.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;

  @OneToMany(() => Subscription, (subscription) => subscription.user)
  subscriptions: Subscription[];
}
