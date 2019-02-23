import Express from 'express';
import bodyParser from 'body-parser';
import Route from './route/route';

const app = Express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api/v1', Route);

app.get('/api/v1', (req, res) => res.status(200).json({
  message: 'this is the application home page'
}));

app.route('/*').all((req, res) => res.status(404).json({
  status: 404,
  error: '404 Route not found'
}));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
