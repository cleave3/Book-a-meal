import { Router } from "express";
import cartController from "../controller/cartController";
import Authenticate from "../middlewares/auth";

const { addItem, removeItem, removeItems, getItems } = cartController;
const { authenticateUser } = Authenticate;
const app = Router();

app.post("/add", authenticateUser, addItem);
app.get("/", authenticateUser, getItems);
app.delete("/:id", authenticateUser, removeItem);
app.delete("/", authenticateUser, removeItems);

export default app;
