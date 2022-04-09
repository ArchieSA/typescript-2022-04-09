type Movie = {title: string} & {duration: number};

type MovieKind = 'film' | 'shortFilm';

const movie: Movie = {
    title: '',
    duration: 123,
}

enum BookTypes {
    humorBook = 'humor',
    horrorBok = 'horror',
}

type Book = {title: string, type: BookTypes.humorBook, author: string} |
    {title: string, type: BookTypes.horrorBok, pageCount: number};


const book: Book = {
    title: '',
    pageCount: 99,
    type: BookTypes.horrorBok,
}

function readBook(book: Book): void {
    if (book.type === BookTypes.horrorBok) {
        console.log(book.pageCount);
    }
}

console.log(book);