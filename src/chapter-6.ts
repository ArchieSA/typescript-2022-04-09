// Conditional Types

export const a = 0;
const b = 1;

const num = a > b ? 1 : 0;


interface SomeType {
    a: number;
    b: string;
}

interface OtherType {
    a: string;
}

interface TrueType {

}

interface FalseType {

}

type ConditionalType = SomeType extends OtherType ? TrueType : FalseType;

type FontWeight = 'bold' | 'bolder' | 'lighter';

interface Font {
    fontFamily: string;
    fontWeight: FontWeight | number;
}

interface Styles {
    fontFamily: string;
    fontWeight: FontWeight | number;
    width: string;
    height: string;
}

type ConditionalNumber = Styles extends Font ? number : boolean;
type ConditionalBoolean = string extends Font ? number : boolean;

type ConditionalFontType<T extends string | number> = T extends string ? FontWeight : number;

function getFontWeight<T extends number | string>(fw: T): ConditionalFontType<T> {
    throw 'unimplemented';
}

const fontWeight = getFontWeight("bold");
const fontWeight2 = getFontWeight(23);


let stringVariabl = 'Hello';

function getRandomInteger(max: number) {
    // do something
    return max;
}

const stringArray = new Array('123')


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


getProperty({a: '123', b: '123'}, 'b');


function describePerson(person: {name: string}, hobbies: [string, string]) {
    return `${person.name} ${hobbies[0]}`;
}

function call<ReturnType, ArgumentsType extends any[]>(
    functionCall: (...args: ArgumentsType) => ReturnType,
    ...args: ArgumentsType
): ReturnType {
    return functionCall(...args);
}


const randomInteger = call(getRandomInteger, 123);

type FunctionReturnType<FunctionType extends (...args: any[]) => any> =
    FunctionType extends (...args: any[]) => infer ReturnType ? ReturnType : any;

type test = FunctionReturnType<typeof getRandomInteger>;

