import express from 'express';
import { indexRouter } from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(indexRouter);

export {
    app
};
