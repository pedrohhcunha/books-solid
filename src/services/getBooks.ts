import { BooksRepository } from "../repositories/booksRepository";
import { Book } from "../entities/book";

type GetBooksResponse = Book[];

export class GetBooks {
    constructor(
        private booksRepository: BooksRepository
    ) {
    }

    async execute(): Promise<GetBooksResponse> {
        return await this.booksRepository.findAll();
    }
}
