import { Book } from "../entities/book";
import { BooksRepository } from "../repositories/booksRepository";

interface updateBookRequest {
    id: number;
    title: string;
    author: string;
    genre: string;
}

type updateBookResponse = Book;

export class UpdateBook {
    constructor(
        private booksRepository: BooksRepository
    ) {}

    async execute(book: updateBookRequest): Promise<updateBookResponse> {
        const bookFound = await this.booksRepository.findById(book.id);

        if (!bookFound) {
            throw new Error("Book not found");
        }

        const bookUpdated = new Book({
            id: book.id,
            title: book.title,
            author: book.author,
            genre: book.genre
        });

        await this.booksRepository.update(bookUpdated);

        return bookUpdated;
    }
}
