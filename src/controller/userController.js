import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, Profile } from "../models";
import Response from "../utils/responseHelper";
import Validator from "../validation/validator";

const secret = process.env.JWT_SECRET;
const { success, badRequest, validationError, successMessage } = Response;
const { ValidateRegistration, validateLogin } = Validator;

class userController {
  static async signup({ body }, res) {
    try {
      const inputError = ValidateRegistration(body);

      if (inputError.length) return validationError(res, 400, inputError);

      const { user_name, email } = body;

      const checkUser = await User.findOne({ where: { user_name } });

      if (checkUser) throw new Error("User name not available");

      const user = await User.findOne({ where: { email } });

      if (user) throw new Error("Email has already been used");

      const hash = bcrypt.hashSync(body.password, 10);
      const data = { user_name, email, password: hash };

      const {
        dataValues: { id },
      } = await User.create(data);
      await Profile.create({ user_id: id });
      successMessage(res, 201, "user registration successful");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async login({ body }, res) {
    try {
      const inputError = validateLogin(body);

      if (inputError.length) return validationError(res, 400, inputError);

      const { user_name, password } = body;
      let user = await User.findOne({ where: { email: user_name } });
      if (!user) user = await User.findOne({ where: { user_name: user_name } });

      if (!user) throw new Error("Invalid Login Credentials");

      const { is_admin, id } = user.dataValues;
      const token = jwt.sign({ id, is_admin }, secret, { expiresIn: "24h" });
      const result = {
        token,
        id,
        user_name,
        is_admin,
      };
      const hash = user.dataValues.password;

      const checkPassword = bcrypt.compareSync(password, hash);

      if (!checkPassword) throw new Error("Invalid Login Credentials");
      success(res, 200, result);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getUser({ user: { id } }, res) {
    try {
      const user = await User.findOne({
        include: Profile,
        where: { id },
        attributes: ["email"],
      });
      success(res, 200, user);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async updateProfile({ user: { id } }, res) {
    try {
      const { first_name, last_name, gender, bio } = req.body;

      await Profile.update({ first_name, last_name, gender, bio }, { where: { user_id: id } });

      successMessage(res, 201, "User profile updated successful");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async updateProfilePhoto({ user: { id }, file: { destination, filename } }, res) {
    try {
      const image = destination + filename;

      await Profile.update({ image }, { where: { user_id: id } });

      successMessage(res, 201, "User profile image updated successful");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async deleteUser({ params: { id } }, res) {
    try {
      const user = await User.findOne({ where: { id } });

      if (!user) throw new Error("User not found");

      await User.destroy({ where: { id } });

      successMessage(res, 201, "User deleted successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getUsers({ params: { pageno } }, res) {
    try {
      const offset = (pageno - 1) * 10;
      const { count, rows } = await User.findAndCountAll({
        offset: offset,
        limit: 10,
        include: Profile,
        attributes: ["email"],
      });

      if (count < 1) throw new Error("Users not found");
      success(res, 200, { totalusers: count, pageno, totalpages: Math.ceil(count / 10), users: rows });
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }
}

export default userController;
