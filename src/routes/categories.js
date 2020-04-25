import { Router } from "express";
import categoryController from "../controller/categoriesController";
import Authenticate from "../middlewares/auth";

const { addCategory, getCategories, deleteCategory } = categoryController;
const { authenticateAdmin } = Authenticate;
const app = Router();

app.post("/add", authenticateAdmin, addCategory);
app.get("/", authenticateAdmin, getCategories);
app.delete("/:id", authenticateAdmin, deleteCategory);

export default app;
