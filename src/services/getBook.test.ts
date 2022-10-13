import { describe, it, expect } from "vitest";
import { GetBook } from './getBook';
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";
import { Book } from "../entities/book";

describe('GetBook - Service', () => {
    it('should throw an error if id books does note exists ', async () => {
        const inMemoryBooksRepository = new InMemoryBooksRepository();
        const getBook = new GetBook(inMemoryBooksRepository);

        await expect(getBook.execute(123)).rejects.toThrow('Book not found');
    });
    it('should return a book if id books exists ', async () => {
        const inMemoryBooksRepository = new InMemoryBooksRepository();
        const getBook = new GetBook(inMemoryBooksRepository);

        const book = new Book({
            id: 1,
            title: 'Clean Code',
            author: 'Robert Cecil Martin',
            genre: 'Programming',
        })

        await inMemoryBooksRepository.create(book);

        const bookFound = await getBook.execute(1);

        expect(bookFound).toBeInstanceOf(Book);
        expect(bookFound.id).toEqual(book.id);
        expect(bookFound.title).toEqual(book.title);
        expect(bookFound.author).toEqual(book.author);
        expect(bookFound.genre).toEqual(book.genre);
    });
});

