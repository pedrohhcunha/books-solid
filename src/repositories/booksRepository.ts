import { Book } from "../entities/book";

export interface BooksRepository {
    create(book: Book): Promise<void>;
    update(book: Book): Promise<void>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Book[]>;
    findByTitle(title: string): Promise<Book | undefined>;
    findById(id: number): Promise<Book | undefined>;
    getNextId(): number;
}
