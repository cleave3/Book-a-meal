import { Router } from 'express';
import userController from '../controller/userController';
import Authenticate from '../middlewares/auth';
import uploader from '../middlewares/uploader';

const {
	signup,
	login,
	updateProfile,
	getUser,
	updateProfilePhoto,
	deleteUser,
	getUsers
} = userController;
const { authenticateUser, authenticateAdmin } = Authenticate;
const app = Router();

app.post('/signup', signup);
app.post('/login', login);
app.patch('/profile', authenticateUser, updateProfile);
app.get('/profile', authenticateUser, getUser);
app.patch('/profile/photo', authenticateUser, uploader.single('photo'), updateProfilePhoto);
app.patch('/:id', authenticateAdmin, deleteUser);
app.get('/:pageno', getUsers);

export default app;
