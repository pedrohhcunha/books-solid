import { describe, it, expect } from "vitest";
import { GetBooks } from "./getBooks";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";

describe("getBooks - Services", () => {
    it('should return a list of books', async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sup = new GetBooks(booksRepository);

        expect(await sup.execute()).toBeInstanceOf(Array);
        expect(await sup.execute()).toHaveLength(0);
    });
});
