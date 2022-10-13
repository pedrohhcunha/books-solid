import { BooksRepository } from "../booksRepository";
import { Book } from "../../entities/book";

export class InMemoryBooksRepository implements BooksRepository {
    private books: Book[] = [];
    private currentId = 0;

    async getNextId(): Promise<number> {
        return ++this.currentId;
    }

    async create(book: Book): Promise<void> {
        this.books.push(book);
    }

    async findByTitle(title: string): Promise<Book | undefined> {
        return this.books.find(book => book.title === title);
    }

    async findById(id: number): Promise<Book | undefined> {
        return this.books.find(book => book.id === id);
    }

    async findAll(): Promise<Book[]> {
        return this.books;
    }

    async delete(id: number): Promise<void> {
        this.books = this.books.filter(book => book.id !== id);
    }

    async update(book: Book): Promise<void> {
        this.books = this.books.map((bookSaved) => {
            if (bookSaved.id !== book.id) {
                return bookSaved;
            }
            return book;
        })
    }
}
