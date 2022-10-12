import { Request, Response, Router } from "express";

const booksRouter = Router();

booksRouter.post('/books', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'POST BOOKS',
    });
});

booksRouter.get('/books', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'GET BOOKS',
    });
});

booksRouter.get('/books/:id', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'GET ESPCIFIC BOOK',
    });
});

booksRouter.patch('/books/:id', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'PATCH ESPECIFIC BOOK',
    });
});

booksRouter.delete('/books/:id', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'DELETE ESPECIFIC BOOK',
    });
});

export {
    booksRouter
};
