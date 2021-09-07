import { ConnectionOptions } from 'typeorm';
import { User } from '../models';

const databaseConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '0511',
    database: process.env.POSTGRES_DB || 'nodejs',
    entities: [User],
    synchronize: true
};

export default databaseConfig;
