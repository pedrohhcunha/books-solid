import { Book } from "../entities/book";

export interface BooksRepository {
    create(book: Book): Promise<void>;
    findByTitle(title: string): Promise<Book | undefined>;
    findAll(): Promise<Book[]>;
    getNextId(): number;
    findById(id: number): Promise<Book | undefined>;
    delete(id: number): Promise<void>;
}
