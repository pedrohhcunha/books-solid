import { BooksRepository } from "../booksRepository";
import { Book } from "../../entities/book";

export class InMemoryBooksRepository implements BooksRepository {
    private books: Book[] = [];

    async create(book: Book): Promise<void> {
        this.books.push(book);
    }

    async findByTitle(title: string): Promise<Book | undefined> {
        return this.books.find(book => book.title === title);
    }

    async findAll(): Promise<Book[]> {
        return this.books;
    }
}
