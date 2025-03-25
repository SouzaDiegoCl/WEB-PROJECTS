import express from "express";

const userRoutes = express.Router();
import userController from "../controllers/userController.js";

//Endpoint para cadastrar um usuário
userRoutes.post("/user", userController.createUser);

//Endpoint para logar
userRoutes.post("/auth", userController.loginUser);

export default userRoutes;
