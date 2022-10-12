import { describe, it, expect } from "vitest";
import { CreateBook } from "./createBook";
import { Book } from "../entities/book";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";

describe("createBook - Services", () => {
    it('should create a book', () => {
        const booksRepository = new InMemoryBooksRepository();
        const sut = new CreateBook(booksRepository);

        expect(sut.execute({
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
        })).resolves.toBeInstanceOf(Book);

    });

    it('should not create a book if it already exists', async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sut = new CreateBook(booksRepository);

        await sut.execute({
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
        });

        expect(sut.execute({
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
        })).rejects.toThrowError('Book already exists');
    });
});
