export interface BookProps {
    title: string;
    author: string;
    genre: string;
}

export class Book {
    private props: BookProps;

    get title() {
        return this.props.title;
    }

    get author() {
        return this.props.author;
    }

    get genre() {
        return this.props.genre;
    }

    constructor(props: BookProps) {
        const { title, author, genre } = props;

        if(title.length === 0 || title.length > 144) {
            throw new Error('The title must be between 1 and 144 characters');
        }

        if(author.length === 0 || author.length > 44) {
            throw new Error('The author must be between 1 and 44 characters');
        }

        if(genre.length === 0 || genre.length > 16) {
            throw new Error('The genre must be between 1 and 16 characters');
        }

        this.props = props;
    }
}
