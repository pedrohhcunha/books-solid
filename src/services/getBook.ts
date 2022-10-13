import { BooksRepository } from "../repositories/booksRepository";

export class GetBook {
    constructor(
        private booksRepository: BooksRepository,
    ) {}

    async execute(id: number) {
        const book = await this.booksRepository.findById(id);

        if (!book) {
            throw new Error('Book not found');
        }

        return book;
    };
}
