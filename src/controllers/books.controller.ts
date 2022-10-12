import { Request, Response } from "express";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";
import { CreateBook } from "../services/createBook";

export class BooksController {
    public async createBook(req: Request, res: Response) {
        const { title, author, genre } = req.body;

        if (!title || !author || !genre) {
            return res.status(400).json({
                message: 'Bad Request',
            });
        }

        const booksRepository = new InMemoryBooksRepository();
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
        res.status(200).json({
            message: 'GET BOOKS',
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
