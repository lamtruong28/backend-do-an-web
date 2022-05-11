
class ProductController {
    getProduct = (req, res) => {
        res.send('get product success!');
    }
}

export default new ProductController();