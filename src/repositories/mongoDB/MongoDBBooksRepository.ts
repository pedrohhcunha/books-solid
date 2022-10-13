import { BooksRepository } from '../booksRepository';
import { Book } from "../../entities/book";
import { BookSchemma } from "../../models/book.model";
import { CounterSchema } from "../../models/counter.model";

export class MongoDBBooksRepository implements BooksRepository {

    // Generate an ascending id using mongodb
    async getNextId(): Promise<number> {
        const bookIdCounter = await CounterSchema.findByIdAndUpdate({
            _id: "bookId",
        }, {
            $inc: {
                sequence: 1,
            },
        }, {
            new: true,
        });

        if(!bookIdCounter) {
            const newCounter = new CounterSchema({
                _id: "bookId",
                sequence: 1,
            });
            await newCounter.save();
            return 1;
        }

        return bookIdCounter.sequence;
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
