import { Request, Response } from "express";
import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";
import { GetBooks } from "../services/getBooks";

export class GetBooksController {
    public async handle(req: Request, res: Response) {
        try{
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
        } catch (error) {
            res.status(400)
                .json({
                    message: error.message
                });
        }
    };
}
