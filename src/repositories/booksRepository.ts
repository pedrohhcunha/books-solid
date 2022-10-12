import { Book } from "../entities/book";

export interface BooksRepository {
    create(book: Book): Promise<void>;
    findByTitle(title: string): Promise<Book | undefined>;
    findAll(): Promise<Book[]>;
}
