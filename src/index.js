import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.listen(PORT, () => console.log(`Book a mealing is running at port ${PORT}`));
