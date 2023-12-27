import 'reflect-metadata';
import AppDataSource from '../config/dataSource'; 

async function initializeDatabase() {
    try {
        await AppDataSource.initialize();
        console.log('Data source initialized');
    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error;
    }
}

export default initializeDatabase;
