import { Sequelize } from 'sequelize';

// Create a Sequelize instance
const sequelize = new Sequelize('your-database-name', 'root', 'your-password', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;