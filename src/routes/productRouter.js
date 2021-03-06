import { Router } from "express";
import productController from "../app/controllers/ProductController.js";

const route = Router();

route.get('/', productController.getProduct);
route.post('/add-new', productController.addProduct);
route.post('/remove/:id', productController.removeProduct);
route.post('/edit/:id', productController.editProduct);

export default route;