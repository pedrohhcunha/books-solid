import express from 'express';
import { indexRouter } from "./routes/index.routes";
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(indexRouter);

export {
    app
};
