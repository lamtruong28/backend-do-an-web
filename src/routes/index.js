import userRouter from './userRouter.js';
import productRouter from './productRouter.js';

export default function route(app) {
    app.use('/api/users', userRouter);
    app.use('/api/products', productRouter);
};