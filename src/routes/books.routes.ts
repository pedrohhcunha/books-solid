import { Router } from "express";
import { BooksController } from "../controllers/books.controller";
import { CreateBookController } from "../controllers/createBook.controller";

const booksRouter = Router();
const booksController = new BooksController();

const createBookController = new CreateBookController();

booksRouter.post('/books', createBookController.handle);
booksRouter.get('/books', booksController.getBooks);
booksRouter.get('/books/:id', booksController.getBook);
booksRouter.patch('/books/:id', booksController.updateBook);
booksRouter.delete('/books/:id', booksController.deleteBook);

export {
    booksRouter
};
