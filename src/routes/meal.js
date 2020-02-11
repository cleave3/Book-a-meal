import { Router } from 'express';
import mealController from '../controller/mealController';
import Authenticate from '../middlewares/auth';
import uploader from '../middlewares/uploader';

const { addMeal, updateMealPrice, getMeal, getMeals, getMealsByCategory, deleteMeal } = mealController;
const { authenticateAdmin } = Authenticate;
const app = Router();

app.post('/', uploader.array('photo', 3), addMeal);
app.get('/page/:pageno', getMeals);
app.get('/:id', getMeal);
app.get('/:category_id/:pageno', getMealsByCategory);
app.patch('/price', updateMealPrice);
app.delete('/:id', deleteMeal);

export default app;
