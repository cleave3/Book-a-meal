import Express from 'express';
import bodyParser from 'body-parser';
import Route from './route/route';

const app = Express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use( Route);

app.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'App is running',
}));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
