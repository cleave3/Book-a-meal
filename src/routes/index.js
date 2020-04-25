import { Router } from "express";
import userRoute from "./user";
import mealRoute from "./meal";
import cartRoute from "./cart";
import categoryRoute from "./categories";
import orderRoute from "./order";
import menuRoute from "./menu";

const app = Router();
app.use("/user", userRoute);
app.use("/meal", mealRoute);
app.use("/cart", cartRoute);
app.use("/categories", categoryRoute);
app.use("/menu", menuRoute);
// app.use("/order", orderRoute);

app.get("/", (req, res) => res.send("Book a meal is live"));

export default app;
