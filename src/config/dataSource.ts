import 'reflect-metadata'
import {DataSource } from 'typeorm';
import config from './config';
import { User } from '../graphql/user/user.entity';
import { Channel } from '../graphql/channel/channel.entity';
 import { Plan } from '../graphql/plan/plan.entity';
import { Package } from '../graphql/package/package.entity';
import { Subscription } from '../graphql/subscription/subscription.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.postgres.host,
    username: config.postgres.username,
    password: config.postgres.password,
    database: config.postgres.database,
    entities: [User,Subscription,Plan,Channel,Package],
    synchronize: false,
    logging: false,
});

export default AppDataSource;
