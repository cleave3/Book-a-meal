import Express from 'express';
import { control } from '../controller/mealController';


const app = Express.Router();

app.get('/api/v1/meals/', control.getAllMeals);
app.post('/api/v1/meals', control.addMeal);
app.get('/api/v1/meals/:id', control.getAmeal);
app.put('/api/v1/meals/:id', control.updateAmeal);

export default app;
