// // Interfaces and Type Aliases
// // Interfaces
// interface Actor {
//     name: string;
//     age: number;
//     filmCount?: number;
// }
//
// interface Movie {
//     title: string;
//     duration: number;
//     language: string;
//     actors?: Actor[];
// }
//
//
//
// const actorMichael: Actor = {
//     name: 'Michael',
//     age: 23,
//     filmCount: undefined,
// };
//
//
// const movie: Movie = {
//     title: 'Spider Man',
//     duration: 120,
//     actors: [actorMichael],
//     language: 'en',
// }
//
//
// const movie2: Movie = {
//     title: 'Spider Man 2',
//     duration: 120,
//     actors: [actorMichael],
//     language: 'en',
// };
//
//
// movie2.actors?.forEach((actor) =>  console.log(actor.name));
// movie.actors?.forEach((actor) =>  console.log(actor.name));
//
// // Type Aliases
//
// type Position = 'absolute' | 'fixed' | 'static';
//
// let position: Position;
//
// position = 'fixed'
//
// type ActorsArray =  (Actor | string)[];
//
//
// /*
// * 1. Extends
// *
// *
// *
// * */
//
// interface HorrorMovie extends Movie {
//     evilCharacter: Actor;
// }
//
//
// const horrorMovie: HorrorMovie = {
//     title: 'Lake',
//     duration: 120,
//     actors: [actorMichael],
//     language: 'en',
//     evilCharacter: {
//         name: 'Valera',
//         age: 23,
//         filmCount: undefined,
//     }
// }
//
// // type Book = {
// //     pageCount: number;
// //     title: string;
// // }
// //
// // type Horror = {
// //     evilCharacter: Actor;
// // }
// //
// // type HorrorBook = Book & Horror;
// //
// // const horrorBook: HorrorBook = {
// //     pageCount: 99,
// //     title: 'Lake',
// //     evilCharacter: {
// //         name: 'Valera',
// //         age: 23,
// //         filmCount: undefined,
// //     }
// // }
//
// // Implementation
//
//
// class Film implements Movie {
//     title: string = '';
//     duration: number = 0;
//     actors: Actor[] = [];
//     language: string = 'en';
// }
//
// // class HorrorBookClass implements HorrorMovie {
// //     title: string = '';
// //     duration: number = 0;
// //     actors: Actor[] = [];
// //     language: string = 'en';
// //     evilCharacter: Actor = {
// //         name: 'Valera',
// //         age: 23,
// //         filmCount: undefined,
// //     };
// // }
//
//
//
//
// abstract class Book {
//     title: string;
//
//     constructor(title: string) {
//         this.title = title;
//     }
// }
//
//
// // Implements, extends
//
// type Type1 = {
//     typeProperty1: string;
// }
//
// type Type2 = {
//     typeProperty2: string;
// }
//
// interface Interface1 {
//     property1: string;
// }
//
// interface Interface2 {
//     property2: string;
// }
//
// interface Interface3 extends Type1, Type2, Interface1, Interface2 {
//     property3: string;
// }
//
// const testConst: Interface3 = {
//     typeProperty1: '',
//     typeProperty2: '',
//     property1: '',
//     property2: '',
//     property3: '',
// }
//
// class Class1 {
//     classProperty1: string = '';
// }
//
// class Class2 {
//     classProperty2: string = '';
// }
//
// class Class3 implements Interface1, Interface2, Type1 {
//     property1: string = '';
//     property2: string = '';
//     typeProperty1: string = '';
//     classProperty3: string = '';
// }
//
// const class3Instance: Class3 = {
//     property1: '',
//     property2: '',
//     typeProperty1: '',
//     classProperty3: 'classProperty3',
// };
//
// // Classes
// // public
// // protected
// // private
//
// // readonly
//
// class HorrorBookClass extends Book {
//     readonly pageCount: number = 99;
//
//     constructor(title: string, pageCount: number) {
//         super(title);
//         this.pageCount = pageCount;
//     }
//
//     private writeBook() {
//         console.log(this.pageCount);
//     }
// }
//
// class HorrorBookClassChild extends HorrorBookClass {
//     startRead() {
//         // this.writeBook();
//         console.log(this.pageCount);
//     }
// }
//
// const book = new HorrorBookClass("Lake", 99);
//
