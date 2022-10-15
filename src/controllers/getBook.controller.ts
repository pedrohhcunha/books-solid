import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";
import { Request, Response } from "express";
import { GetBook } from "../services/getBook";

export class GetBookController {
    public async handle(req: Request, res: Response) {
        try{
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
        } catch (error) {

        }
    };
}
