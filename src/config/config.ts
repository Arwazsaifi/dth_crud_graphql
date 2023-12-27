import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    postgres: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
};

export default config;