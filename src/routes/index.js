import { Router } from 'express';
import userRoute from './user';

const app = Router();
app.use('/user', userRoute);

app.get('/', (req, res) => res.send('Book a meal is live'));

export default app;
