import { describe, it, expect } from "vitest";
import { UpdateBook } from "./updateBook";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";
import { Book, BookProps } from "../entities/book";

describe('updateBook - Services', () => {
    it('should throw an error when book does not exists', async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sup = new UpdateBook(booksRepository);

        const book: BookProps = {
            id: 1,
            title: 'title',
            author: 'author',
            genre: 'genre'
        };

        await expect(sup.execute(book)).rejects.toThrowError('Book not found');
    });

    it('should update a book', async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sup = new UpdateBook(booksRepository);

        const bookProperties: BookProps = {
            id: 1,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
        }

        const book = new Book(bookProperties);

        await booksRepository.create(book);

        const updatedBookProperties: BookProps = {
            ...bookProperties,
            title: 'The Hobbit'
        };

        const updatedBook = await sup.execute(updatedBookProperties);

        expect(updatedBook.id).toBe(1);
        expect(updatedBook.title).toBe('The Hobbit');
        expect(updatedBook.author).toBe('J.R.R. Tolkien');
        expect(updatedBook.genre).toBe('Fantasy');
    });
});
