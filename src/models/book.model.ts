import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id_book: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
});

export const BookSchemma = mongoose.model('Book', bookSchema);
