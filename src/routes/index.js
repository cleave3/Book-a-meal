import { Router } from 'express';
import userRoute from './user';
import mealRoute from './meal';

const app = Router();
app.use('/user', userRoute);
app.use('/meal', mealRoute);

app.get('/', (req, res) => res.send('Book a meal is live'));

export default app;
