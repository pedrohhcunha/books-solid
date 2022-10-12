import { BooksRepository } from '../booksRepository';
import { Book } from "../../entities/book";
import { BookSchemma } from "../../models/book.model";

export class MongoDBBooksRepository implements BooksRepository {
    private currentId = 0;

    getNextId(): number {
        return ++this.currentId;
    }

    async create(book: Book): Promise<void> {
        const bookSchemma = new BookSchemma({
            id_book: book.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
        });
        await bookSchemma.save();
    }

    async findByTitle(title: string): Promise<Book | undefined> {
        const book = await BookSchemma.findOne({ title: title });

        if (!book) return undefined;

        return new Book({
            id: book.id_book,
            title: book.title,
            author: book.author,
            genre: book.genre,
        });
    }

    async findById(id: number): Promise<Book | undefined> {
        const book = await BookSchemma.findOne({ id_book: id });

        if (!book) return undefined;

        return new Book({
            id: book.id_book,
            title: book.title,
            author: book.author,
            genre: book.genre,
        });
    }

    async findAll(): Promise<Book[]> {
        const books = await BookSchemma.find();

        return books.map((book) => new Book({
            id: book.id_book,
            title: book.title,
            author: book.author,
            genre: book.genre,
        }));
    }

    async delete(id: number): Promise<void> {
        await BookSchemma.deleteOne({ id_book: id });
    }
    async update(book: Book): Promise<void> {
        await BookSchemma.updateOne({ id_book: book.id }, {
            title: book.title,
            author: book.author,
            genre: book.genre,
        });
    }
}
