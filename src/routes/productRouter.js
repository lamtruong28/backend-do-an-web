import { Router } from "express";
import productController from "../app/controllers/ProductController.js";

const route = Router();

route.use('/create', productController.getProduct);

export default route;