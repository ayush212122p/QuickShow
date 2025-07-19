import express from "express";
import { getFavorites, getUserBookings, updatefavorite } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/bookings",getUserBookings)
userRouter.post("/update-favorite",updatefavorite)
userRouter.get("/favorites",getFavorites)

export default userRouter;