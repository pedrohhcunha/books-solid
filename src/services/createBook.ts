import { Book } from "../entities/book";
import { BooksRepository } from "../repositories/booksRepository";

interface CreateBookRequest {
    title: string;
    author: string;
    genre: string;
}

type CreateBookResponse = Book;

export class CreateBook {

    constructor(
        private booksRepository: BooksRepository
    ) {
    }

    async execute(request: CreateBookRequest): Promise<CreateBookResponse> {
        const { title, author, genre } = request;

        const bookPreviouslyCreated = await this.booksRepository.findByTitle(title);

        if (bookPreviouslyCreated) {
            throw new Error("Book already exists");
        }

        const book = new Book({ title, author, genre });

        await this.booksRepository.create(book);

        return book;
    }
}
