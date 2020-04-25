import { Menu } from "../models";
import Response from "../utils/responseHelper";

const { successMessage, badRequest, success } = Response;

export default class MenuController {
  static async addItem({ body: { mealid }, user: { id } }, res) {
    try {
      await Menu.create({ user_id: id, meal_id: mealid });
      successMessage(res, 201, "Item added to menu successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getItems({ user: { id } }, res) {
    try {
      const menuItems = await Menu.findAll({ where: { user_id: id } });
      if (menuItems.length < 1) throw new Error("Menu is empty");
    } catch ({ message: error }) {
      success(res, 200, menuItems);
      badRequest(res, 404, error);
    }
  }

  static async removeItem({ params: { id } }, res) {
    try {
      const item = await Menu.findOne({ where: { id } });
      if (!item) throw new Error("Item not found");
      await Menu.destroy({ where: { id } });
      successMessage(res, 200, "Item added to removed");
    } catch ({ message: error }) {
      badRequest(res, 404, error);
    }
  }

  static async removeItems({ user: { id } }, res) {
    try {
      const menuItems = await Menu.findAll({ where: { user_id: id } });
      if (menuItems.length < 1) throw new Error("Menu is empty");
      await Menu.destroy({ where: { user_id: id } });
      successMessage(res, 200, "Menu cleared");
    } catch ({ message: error }) {
      badRequest(res, 404, error);
    }
  }
}
