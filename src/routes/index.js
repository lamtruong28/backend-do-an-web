import userRouter from './userRouter.js';
import productRouter from './productRouter.js';

export default function route(app) {
    app.use('/users', userRouter);
    app.use('/products', productRouter);
};