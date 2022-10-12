import { Book } from './book'
import { describe, expect, it } from "vitest";
import { generateString } from "../utils/generateString";

describe('Book - Entites', () => {
    it('should return a book', () => {
        const book = new Book({
            id: 1,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
        });

        expect(book.title).toBe('The Hobbit');
        expect(book.author).toBe('J.R.R. Tolkien');
        expect(book.genre).toBe('Fantasy');
        expect(book).toBeInstanceOf(Book);
    });

    it('should throw an error if the title is empty', () => {
        expect(() => {
            new Book({
                id: 1,
                title: '',
                author: 'J.R.R. Tolkien',
                genre: 'Fantasy',
            });
        }).toThrowError('The title must be between 1 and 144 characters');
    });

    it('should throw an error if the title is longer than 144 characters', () => {
        expect(() => {
            new Book({
                id: 1,
                title: generateString(145),
                author: 'J.R.R. Tolkien',
                genre: 'Fantasy',
            });
        }).toThrowError('The title must be between 1 and 144 characters');
    });

    it('should throw an error if the author is empty', () => {
        expect(() => {
            new Book({
                id: 1,
                title: 'The Hobbit',
                author: '',
                genre: 'Fantasy',
            });
        }).toThrowError('The author must be between 1 and 44 characters');
    });

    it('should throw an error if the author is longer than 44 characters', () => {
        expect(() => {
            new Book({
                id: 1,
                title: 'The Hobbit',
                author: generateString(45),
                genre: 'Fantasy',
            });
        }).toThrowError('The author must be between 1 and 44 characters');
    });

    it('should throw an error if the genre is empty', () => {
        expect(() => {
            new Book({
                id: 1,
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                genre: '',
            });
        }).toThrowError('The genre must be between 1 and 16 characters');
    });

    it('should throw an error if the genre is longer than 16 characters', () => {
        expect(() => {
            new Book({
                id: 1,
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                genre: generateString(17),
            });
        }).toThrowError('The genre must be between 1 and 16 characters');
    });
});
