import { Router } from "express";
import userController from "../app/controllers/UserController.js";

const route = Router();

route.get('/info/:id', userController.getUserInfo)
route.post('/create', userController.createUser);
route.post('/update/:id', userController.updateUser);

export default route;