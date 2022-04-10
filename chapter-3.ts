// type Movie = {title: string} & {duration: number};
//
// type MovieKind = 'film' | 'shortFilm';
//
// const movie: Movie = {
//     title: '',
//     duration: 123,
// }
//
// enum BookTypes {
//     humorBook = 'humor',
//     horrorBok = 'horror',
// }
//
// type Book = {title: string, type: BookTypes.humorBook, author: string} |
//     {title: string, type: BookTypes.horrorBok, pageCount: number};
//
//
// const book: Book = {
//     title: '',
//     pageCount: 99,
//     type: BookTypes.horrorBok,
// }
//
// function readBook(book: Book): void {
//     if (book.type === BookTypes.horrorBok) {
//         console.log(book.pageCount);
//     }
// }
//
// console.log(book);
//
//
// // Mapped types
//
// interface Answer {
//     [name: string]: number;
// }
//
// const answer: Answer = { 'property': 123, 'property2': 123};
//
// // type FontWeight = 'bold' | 'bolder' | 'lighter';
//
// type FontWeightObject = {
//     bold: number;
//     bolder: number;
//     lighter: number;
// }
//
// type FontWeight = keyof FontWeightObject;
//
// type FontWeightRecord = {
//     [fw in FontWeight]: number;
// };
//
// const fw: FontWeightRecord = { 'bold': 23, bolder: 123, lighter: 34 };
//
