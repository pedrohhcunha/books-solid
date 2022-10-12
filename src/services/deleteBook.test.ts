import { describe, it, expect } from "vitest";
import { DeleteBook } from "./deleteBook";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";
import { Book } from "../entities/book";

describe("deleteBook - Services", () => {
    it("should return a error with book id does not exists", () => {
        const booksRepository = new InMemoryBooksRepository();
        const sut = new DeleteBook(booksRepository);

        expect(sut.execute(1)).rejects.toThrowError("Book not found");
    });

    it("should delete a book", async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sut = new DeleteBook(booksRepository);

        const book = new Book({
            id: 1,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
        });

        await booksRepository.create(book);

        const bookDeleted = await sut.execute(1);
        expect(bookDeleted).toBeInstanceOf(Book);

        const bookSearch = await booksRepository.findById(1);
        expect(bookSearch).toBeUndefined();
    });
});
