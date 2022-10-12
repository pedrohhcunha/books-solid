import { Book } from './book'
import {describe, expect, it} from "vitest";

describe('Book - Entites', () => {
    it('should return a book', () => {
        const book = new Book({
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy'
        });

        expect(book.title).toBe('The Hobbit');
        expect(book.author).toBe('J.R.R. Tolkien');
        expect(book.genre).toBe('Fantasy');
        expect(book).toBeInstanceOf(Book);
    });
});
