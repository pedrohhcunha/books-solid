import { Book } from "../entities/book";
import { BooksRepository } from "../repositories/booksRepository";

type DeleteBookRequest = number;
type DeleteBookResponse = Book;

export class DeleteBook {

    constructor(
        private booksRepository: BooksRepository
    ) {
    }

    async execute(id: DeleteBookRequest): Promise<DeleteBookResponse> {

        const book = await this.booksRepository.findById(id);

        if (!book) {
            throw new Error("Book not found");
        }

        await this.booksRepository.delete(id);

        return book;
    }
}
