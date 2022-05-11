import express from 'express';
import connectDB from './configs/db.js';
import 'dotenv/config';
import route from './routes/index.js';

const PORT = process.env.PORT || 5000;
const app = express();

//
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

//connect database:
connectDB();
//init route:
route(app);

app.listen(PORT, () => { console.log(`Server is running ${PORT}`) });