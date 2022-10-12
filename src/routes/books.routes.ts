import { Router } from "express";
import { BooksController } from "../controllers/books.controller";

const booksRouter = Router();
const booksController = new BooksController();

booksRouter.post('/books', booksController.createBook);
booksRouter.get('/books', booksController.getBooks);
booksRouter.get('/books/:id', booksController.getBook);
booksRouter.patch('/books/:id', booksController.updateBook);
booksRouter.delete('/books/:id', booksController.deleteBook);

export {
    booksRouter
};
