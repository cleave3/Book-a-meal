import { Categories } from "../models";
import Response from "../utils/responseHelper";

const { successMessage, success, badRequest } = Response;

export default class CategoriesController {
  static async addCategory({ body: { category_name }, file: { destination, filename } }, res) {
    try {
      const check = Categories.findOne({ where: { category_name } });
      if (check) throw new Error("Category all exist");
      const data = { category_name, image: destination + filename };
      await Categories.create(data);
      successMessage(res, 201, "Category created successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async deleteCategory({ params: { id } }, res) {
    try {
      const category = await Categories.findOne({ where: { id } });

      if (!category) throw new Error("Category not found");

      await Categories.destroy({ where: { id } });

      successMessage(res, 201, "Category deleted successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getCategories(req, res) {
    try {
      const { count, rows } = await Categories.findAndCountAll();
      if (count < 1) throw new Error("Categories not found");
      success(res, 200, rows);
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }
}
