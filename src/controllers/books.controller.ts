import { Request, Response } from "express";
import { CreateBook } from "../services/createBook";
import { GetBooks } from "../services/getBooks";
import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";

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
        res.status(200).json({
            message: 'GET ESPCIFIC BOOK',
        });
    }

    public async updateBook(req: Request, res: Response) {
        res.status(200).json({
            message: 'PATCH ESPECIFIC BOOK',
        });
    }

    public async deleteBook(req: Request, res: Response) {
        res.status(200).json({
            message: 'DELETE ESPECIFIC BOOK',
        });
    }
}
