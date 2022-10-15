import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";
import { CreateBook }  from "../services/createBook";
import { Request, Response } from "express";

export class CreateBookController {
    public async handle(req: Request, res: Response) {
        try{
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
        } catch (error) {
            return res.status(400)
                .json({ message: error.message })
        }
    };
}
