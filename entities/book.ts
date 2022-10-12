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
        this.props = props;
    }
}
