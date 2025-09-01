import { Router } from "express";
import { login, signUp } from "../Controllers/userController.js";

const userRouter = Router()

userRouter.post("/signup", signUp)
userRouter.post("/login", login)


export default userRouter