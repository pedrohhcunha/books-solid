import { Request, Response } from "express";

export class BooksController {
    public async createBook(req: Request, res: Response) {
        res.status(200).json({
            message: 'POST BOOKS',
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
