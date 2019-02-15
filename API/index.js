import Express from 'express';
import bodyParser from 'body-parser';
import mealRoute from './route/mealRoute';

const app = Express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(mealRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
