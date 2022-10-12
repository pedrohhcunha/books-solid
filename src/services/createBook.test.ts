import { describe, it, expect } from "vitest";
import { CreateBook } from "./createBook";
import { Book } from "../entities/book";

describe("createBook - Services", () => {
    it('should create a book', () => {
        const sut = new CreateBook();

        expect(sut.execute({
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
        })).resolves.toBeInstanceOf(Book);

    });
});
