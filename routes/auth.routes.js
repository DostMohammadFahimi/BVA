import express from "express";
import { singUp,login ,logOut  } from "../controllers/auth.controller.js";
const authRouter=express.Router()


authRouter.post('/singup',singUp)
authRouter.post('/singin',login)
authRouter.get('/logout',logOut)

export default authRouter