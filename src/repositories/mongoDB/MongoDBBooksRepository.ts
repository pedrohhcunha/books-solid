import { BooksRepository } from '../booksRepository';
import { Book } from "../../entities/book";

export class MongoDBBooksRepository implements BooksRepository {
    async create(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findByTitle(title: string): Promise<Book | undefined> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<Book | undefined> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<Book[]> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getNextId(): number {
        throw new Error("Method not implemented.");
    }
}
