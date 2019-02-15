import Express from 'express';
import { control } from '../controller/mealController';


const app = Express.Router();

app.get('/api/v1/meals/', control.getAllMeals);
app.post('/api/v1/meals', control.addMeal);

export default app;
