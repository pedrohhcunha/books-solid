import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";
import { UpdateBook }  from "../services/updateBook";
import { Request, Response } from "express";

export class UpdateBookController {
    public async handle(req: Request, res: Response) {
        try{
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
        } catch (error) {
            res.status(400)
                .json({
                    message: error.message,
                });
        }
    }
}
