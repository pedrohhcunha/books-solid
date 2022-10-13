import { Router } from "express";

import { CreateBookController } from "../controllers/createBook.controller";
import { GetBooksController } from '../controllers/getBooks.controller'
import { GetBookController } from '../controllers/getBook.controller'
import { UpdateBookController } from "../controllers/updateBook.controller";
import { DeleteBookController } from "../controllers/deleteBook.controller";

const booksRouter = Router();

const createBookController = new CreateBookController();
const getBooksController = new GetBooksController();
const getBookController = new GetBookController()
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

booksRouter.post('/books', createBookController.handle);
booksRouter.get('/books', getBooksController.handle);
booksRouter.get('/books/:id', getBookController.handle);
booksRouter.patch('/books/:id', updateBookController.handle);
booksRouter.delete('/books/:id', deleteBookController.handle);

export {
    booksRouter
};
