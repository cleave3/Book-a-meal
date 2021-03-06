import { Cart } from "../models";
import Response from "../utils/responseHelper";

const { successMessage, badRequest, success } = Response;

export default class CartController {
  static async addItem({ body: { mealid }, user: { id } }, res) {
    try {
      await Cart.create({ user_id: id, meal_id: mealid });
      successMessage(res, 201, "Item added to cart successfully");
    } catch ({ message: error }) {
      badRequest(res, 400, error);
    }
  }

  static async getItems({ user: { id } }, res) {
    try {
      const cartItems = await Cart.findAll({ where: { user_id: id } });
      if (cartItems.length < 1) throw new Error("Cart is empty");
    } catch ({ message: error }) {
      success(res, 200, cartItems);
      badRequest(res, 404, error);
    }
  }

  static async removeItem({ params: { id } }, res) {
    try {
      const item = await Cart.findOne({ where: { id } });
      if (!item) throw new Error("Item not found");
      await Cart.destroy({ where: { id } });
      successMessage(res, 200, "Item added to removed");
    } catch ({ message: error }) {
      badRequest(res, 404, error);
    }
  }

  static async removeItems({ user: { id } }, res) {
    try {
      const cartItems = await Cart.findAll({ where: { user_id: id } });
      if (cartItems.length < 1) throw new Error("Cart is empty");
      await Cart.destroy({ where: { user_id: id } });
      successMessage(res, 200, "Cart cleared");
    } catch ({ message: error }) {
      badRequest(res, 404, error);
    }
  }
}
