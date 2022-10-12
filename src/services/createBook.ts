import { Book } from "../entities/book";

interface CreateBookRequest {
    title: string;
    author: string;
    genre: string;
}

type CreateBookResponse = Book;

export class CreateBook {
    async execute(request: CreateBookRequest): Promise<CreateBookResponse> {
        const { title, author, genre } = request;

        return new Book({ title, author, genre });
    }
}
