import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import Response from '../utils/responseHelper';

const secret = process.env.JWT_SECRET;
const { success, badRequest } = Response;

class userController {
  static async signup(req, res) {
    try {
      const { firstName, lastName, email } = req.body;
      const user = await User.findOne({ where: { email } });

      if (user) throw new Error('Email has already been used');

      const hash = bcrypt.hashSync(req.body.password, 10);
      const data = {
        firstName, lastName, email, password: hash,
      };
      const { dataValues: { password, ...userData } } = await User.create(data);
      success(res, 201, userData);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) throw new Error('Invalid Login Credentials');

      const {
        firstName, lastName, isAdmin, id,
      } = user.dataValues;
      const token = jwt.sign({ id }, secret, { expiresIn: '24h' });
      const result = {
        token, id, firstName, lastName, isAdmin,
      };
      const hash = user.dataValues.password;

      const checkPassword = bcrypt.compareSync(password, hash);

      if (!checkPassword) throw new Error('Invalid Login Credentials');
      success(res, 200, result);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }
}

export default userController;
