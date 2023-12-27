import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Subscription } from '../subscription/subscription.entity';
import { Package } from '../package/package.entity';

@Entity()
export class Plan {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;
    @Column()
    name: string;

    @Column()
    durationMonths: number;

    @OneToMany(() => Subscription, subscription => subscription.plan)
    subscriptions: Subscription[];

    @ManyToOne(() => Package, pkg => pkg.plans)
    @JoinColumn({ name: 'packageId' })
    package: Package;

}