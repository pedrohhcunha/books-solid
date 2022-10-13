import { Request, Response } from "express";
import { CreateBook } from "../services/createBook";
import { GetBooks } from "../services/getBooks";
import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";
import { DeleteBook } from "../services/deleteBook";
import { UpdateBook } from "../services/updateBook";
import { GetBook } from "../services/getBook";

export class BooksController {

    public async createBook(req: Request, res: Response) {
        const { title, author, genre } = req.body;

        if (!title || !author || !genre) {
            return res.status(400).json({
                message: 'Bad Request',
            });
        }

        const booksRepository = new MongoDBBooksRepository();
        const createBook = new CreateBook(booksRepository);

        const book = await createBook.execute({
            title,
            author,
            genre,
        });

        res.status(201).json({
            message: 'Book created successfully',
            book: {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
            },
        });
    }

    public async getBooks(req: Request, res: Response) {
        const booksRepository = new MongoDBBooksRepository();
        const getBooks = new GetBooks(booksRepository);

        const books = await getBooks.execute();
        const booksFiltered = books.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
        }));

        res.status(200).json({
            message: 'Books retrieved successfully',
            books: booksFiltered,
        });
    }

    public async getBook(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                message: 'Bad Request',
            });
        }

        const booksRepository = new MongoDBBooksRepository();
        const getBook = new GetBook(booksRepository);

        const book = await getBook.execute(parseInt(id));

        res.status(200).json({
            message: 'Book retrieved successfully',
            book: {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
            },
        });
    }

    public async updateBook(req: Request, res: Response) {
        const { id } = req.params;
        const { title, author, genre } = req.body;

        if (!id || !title || !author || !genre) {
            return res.status(400).json({
                message: 'Bad Request',
            });
        }

        const booksRepository = new MongoDBBooksRepository();
        const updateBook = new UpdateBook(booksRepository);

        const book = await updateBook.execute({
            id: parseInt(id),
            title,
            author,
            genre,
        });

        res.status(200).json({
            message: 'Book updated successfully',
            book: {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
            },
        });
    }

    public async deleteBook(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                message: 'Bad Request',
            });
        }

        const booksRepository = new MongoDBBooksRepository();
        const deleteBook = new DeleteBook(booksRepository);

        const bookDeleted = await deleteBook.execute(parseInt(id));

        res.status(200).json({
            message: 'Book deleted successfully',
            book: {
                id: bookDeleted.id,
                title: bookDeleted.title,
                author: bookDeleted.author,
                genre: bookDeleted.genre,
            },
        });
    }
}
