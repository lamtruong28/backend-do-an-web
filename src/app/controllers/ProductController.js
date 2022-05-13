import Product from "../models/Product.js";

class ProductController {
    getProduct = async (req, res) => {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }
    }
    addProduct = async (req, res) => {
        try {
            const data = req.body;
            const product = await new Product({ ...data })
            product.save();
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }
    removeProduct = async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete({ _id: req.params.id })
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProductController();