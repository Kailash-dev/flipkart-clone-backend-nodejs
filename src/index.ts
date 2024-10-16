import express, { Application, Request, Response } from 'express';
import sequelize from '../config/database';
import User from './models/User';

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());

// Test Sequelize connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Sync models with database
sequelize.sync()
    .then(() => console.log('Models synchronized with the database...'))
    .catch(err => console.log('Error synchronizing models: ' + err));

// Test route
app.get('/', async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
