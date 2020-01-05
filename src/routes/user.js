import { Router } from 'express';
import userController from '../controller/userController';

const { signup, login } = userController;

const app = Router();

app.post('/signup', signup);
app.post('/login', login);

export default app;
