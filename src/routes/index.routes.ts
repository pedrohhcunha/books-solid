import { Router } from "express";
import { booksRouter } from "./books.routes";

const indexRouter = Router();

indexRouter.get("/", (request, response) => {
    return response
        .status(200)
        .json({
            message: "Hello World!"
        });
});

indexRouter.use(booksRouter);

export {
    indexRouter
};
