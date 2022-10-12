import { describe, it, expect } from "vitest";
import { getBooks } from "./getBooks";
import { InMemoryBooksRepository } from "../repositories/inMemory/inMemoryBooksRepository";

describe("getBooks - Services", () => {
    it('should return a list of books', async () => {
        const booksRepository = new InMemoryBooksRepository();
        const sup = new getBooks(booksRepository);

        expect(await sup.execute()).toBeInstanceOf(Array);
        expect(await sup.execute()).toHaveLength(0);
    });
});
