import { Meal } from "../models";
import Response from "../utils/responseHelper";
import Validator from "../validation/validator";

const { success, badRequest, successMessage, validationError } = Response;
const { validateMeal } = Validator;

class MealController {
  static async addMeal({ body, files }, res) {
    try {
      const inputError = validateMeal(body);
      if (inputError.length) return validationError(res, 400, inputError);

      const { meal_name } = body;
      body.images = files.map((file) => `images/${file.filename}`);

      const checkMeal = await Meal.findOne({ where: { meal_name } });
      if (checkMeal) throw new Error(`${meal_name} alrealy exists`);

      const {
        dataValues: { id },
      } = await Meal.create(body);

      successMessage(res, 201, "Meal created sucessfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async updateMealPrice({ body: { id, price } }, res) {
    try {
      const meal = await Meal.findOne({ where: { id } });

      if (!meal) throw new Error("Meal not found");

      await Meal.update({ price }, { where: { id } });

      successMessage(res, 201, "Meal price updated successful");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async deleteMeal({ params: { id } }, res) {
    try {
      const meal = await Meal.findOne({ where: { id } });

      if (!meal) throw new Error("Meal not found");

      await Meal.destroy({ where: { id } });

      successMessage(res, 201, "Meal deleted successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getMeal({ params: { id } }, res) {
    try {
      const meal = await Meal.findOne({ where: { id } });

      if (!meal) throw new Error("Meal not found");

      success(res, 200, meal);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }
  static async getMeals({ params: { pageno = 1 } }, res) {
    try {
      const offset = (pageno - 1) * 12;
      const { count, rows } = await Meal.findAndCountAll({
        offset: offset,
        limit: 10,
      });

      if (count < 1) throw new Error("Meals not found");
      success(res, 200, { totalMeals: count, pageno, totalpages: Math.ceil(count / 10), meals: rows });
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getMealsByCategory({ params: { pageno, category_id } }, res) {
    try {
      const offset = (pageno - 1) * 12;
      const { count, rows } = await Meal.findAndCountAll({
        where: category_id,
        offset: offset,
        limit: 10,
      });

      if (count < 1) throw new Error("Meals not found");
      success(res, 200, { totalMeals: count, pageno, totalpages: Math.ceil(count / 10), Meals: rows });
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }
}

export default MealController;
