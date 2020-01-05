import Express from 'express';
import { mealControl } from '../controller/mealController';
import { menuControl } from '../controller/menuController';
import { orderControl } from '../controller/orderController';

const app = Express.Router();

// ROUTE FOR MEALS
app.get('/api/v1/meals/', mealControl.getAllMeals);
app.post('/api/v1/meals', mealControl.addMeal);
app.get('/api/v1/meals/:id', mealControl.getAmeal);
app.put('/api/v1/meals/:id', mealControl.updateAmeal);
app.delete('/api/v1/meals/:id', mealControl.deleteAmeal);

// ROUTE FOR MENU
app.get('/api/v1/menu/', menuControl.getMenu);
app.post('/api/v1/menu/', menuControl.addToMenu);

// ROUTE FOR ORDERS
app.get('/api/v1/orders/', orderControl.getAllOrders);
app.post('/api/v1/orders', orderControl.addOrder);
app.get('/api/v1/orders/:id', orderControl.getAnOrder);
app.put('/api/v1/orders/:id', orderControl.updateAnOrder);
app.delete('/api/v1/orders/:id', orderControl.deleteAnOrder);
export default app;
