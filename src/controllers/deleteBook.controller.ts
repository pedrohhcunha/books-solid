import { Request, Response } from "express";
import { DeleteBook } from "../services/deleteBook";
import { MongoDBBooksRepository } from "../repositories/mongoDB/MongoDBBooksRepository";

export class DeleteBookController {
    public async handle(req: Request, res: Response){
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
