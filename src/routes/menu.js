import { Router } from "express";
import MenuController from "../controller/MenuController";
import Authenticate from "../middlewares/auth";

const { addItem, removeItems, removeItem, getItems } = MenuController;
const { authenticateAdmin, authenticateUser } = Authenticate;
const app = Router();

app.post("/add", authenticateAdmin, addItem);
app.get("/", authenticateUser, getItems);
app.delete("/:id", authenticateAdmin, removeItem);
app.delete("/", authenticateAdmin, removeItems);

export default app;
