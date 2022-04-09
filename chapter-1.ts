// Types
// Boolean
let isLoaded: boolean;

isLoaded = false;

// Number
let num: number | null = 10;
let float: number = 10.5;
let binary: number = 0b101;

num = null;

// BigInt

let big: BigInt = 100n;

// String

let sentence: string = 'Hello! Im Artem';
let multiline = `Hello! Im Artem. ${num}`;

sentence.length;

// Symbol

const key: symbol = Symbol("Ключ");

// Null and undefined

let undVar: undefined = undefined;
let nullVar: null = null;

// Any

let anyVar: any = 123;
anyVar = '123'
// anyVar.map(() => {});

// Unknown

let unknownVar: unknown = '123';
// unknownVar.length;
// let stringForUnknown: string = unknownVar;

// Void

const printString = (): void => {
    //do something

    // no return value
};

// Object

const movie: {
    title: string;
    duration: number;
    actors?: string[];
} = {
    title: 'Spider Man',
    duration: 120,
    actors: ['Valera'],
}

movie.actors?.push('Arnie');

movie.title;
// movie.actors = [];

// Array

const actors: (string | number)[] = [];

const movies: {
    title: string;
    duration: number;
    actors: string[];
}[] = [];

movies.push({
    title: 'Spider Man',
    duration: 120,
    actors: ['Valera'],
});

actors.push('Valera', 123);


// Tuple

const tupleVar: [string, number, {
    title: string;
    duration: number;
    actors: string[];
}] = ['123', 13, {
    title: 'Spider Man',
    duration: 120,
    actors: ['Valera'],
}];


// Enum

const enum MovieTypes {
    Film = 'film',
    Series = 'series',
    Video = 'video',
    ShortFilm = 'shortFilm',
}

const film: {
    type: 'film' | 'series',
    title: string;
    duration: number;
    actors?: string[];
} = {
    title: 'Spider Man',
    duration: 120,
    actors: ['Valera'],
    type: MovieTypes.Film,
}

console.log(MovieTypes.Film === 'film');
film.type = 'film';
film.type = MovieTypes.Film;
film.type = 'series';

// Literal Type
let position: 'absolute' | 'fixed';