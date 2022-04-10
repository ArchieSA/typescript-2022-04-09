// // Generic
//
// enum PlantKind {
//     Tomat = 'tomat',
//     Apple = 'apple',
// }
//
// enum AnimalKind {
//     Dog = 'dog',
//     Cat = 'cat',
//     Fish = 'fish',
//     Bird = 'bird',
//     Lion = 'lion',
// }
//
// interface Plant {
//     kind: PlantKind.Apple | PlantKind.Tomat;
//
//     grow: () => void;
// }
//
// interface Tomat extends Plant{
//     kind: PlantKind.Tomat
//
//     type: string;
// }
//
// interface Apple extends  Plant{
//     kind: PlantKind.Apple
// }
//
// interface Dog {
//     kind: AnimalKind.Dog
//
//     bark: () => void;
// }
//
//
// const growPlantTomat = (plant: Tomat): Tomat => {
//     // do something
//     return plant
// };
// const growPlantApple = (plant: Apple): Apple => {
//     // do something
//     return plant
// };
// // ....
//
//
// const growPlant = <T extends Plant>(plant: T): T =>  {
//
//     plant.grow();
//
//     return plant;
// }
//
// const plant = growPlant<Plant>({kind: PlantKind.Tomat, grow: () => {}});
//
// const tomat = growPlant({kind: PlantKind.Apple, grow: () => {}});
//
// plant.grow();
//
// tomat.grow();
//
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }
//
// const a = { x: 12, y: 123};
//
// type B = {x: number, y: number, z: number};
//
// const b: B = { x: 12, y: 123, z: 34};
//
//
// getProperty<B, 'x'>(b, 'x');
//
// // Type Guard
//
// function padLeft(padding: number | string, input: string): string {
//     if (typeof padding === 'number') {
//         return new Array(padding + 1).join('') + input;
//     }
//
//     return padding + input;
// }
//
// function getMessageLength(message?: string): number {
//     if (message) {
//         return message.length;
//     }
//
//     return 0;
// }
//
// function getCoordinate(x: string | number, y: string | boolean) {
//     if (x === y) {
//         x + y;
//     } else {
//         x;
//         y;
//     }
// }
//
// interface Fish {
//     kind: AnimalKind.Fish;
//     swim: () => void;
// }
//
// interface Bird {
//     kind: AnimalKind.Bird;
//     fly: () => void;
// }
//
// function move(animal: Fish | Bird) {
//     if ('swim' in animal) {
//         return animal.swim();
//     }
//
//     return animal.fly();
// }
//
//
// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     } else  {
//         console.log(x.toUpperCase());
//     }
// }
//
//
// function isFish(animal: Fish | Bird): animal is Fish {
//     const fish = (animal as Fish);
//
//     return fish.swim !== undefined && typeof fish.swim === 'function';
// }
//
// function isBird(animal: Fish | Bird): animal is Bird {
//     const bird = (animal as Bird);
//
//     return bird.fly !== undefined && typeof bird.fly === 'function';
// }
//
//
// function moveWithTypePredicates(animal: Fish | Bird) {
//     if (isFish(animal)) {
//         animal.swim();
//     }
//
//     if (isBird(animal)) {
//         animal.fly();
//     }
// }
//
// function moveWithEnum(animal: Fish | Bird) {
//     if (animal.kind === AnimalKind.Fish) {
//         animal.swim();
//     }
//
//     if (animal.kind === AnimalKind.Bird) {
//         animal.fly();
//     }
// }
//
// interface CustomResponse<T> {
//     status: '200' | '404' | '500';
//     error?: Error;
//     body?: T;
// }
//
// function get<T>(arg?: string): CustomResponse<T> {
//     return  {
//         status: '200',
//     }
// }
//
// const bird = get<Bird>().body;
//
//
// class AnimalClass<T, K> {
//     property: T;
//
//     constructor(arg: T) {
//         this.property = arg;
//     }
// }
//
// new AnimalClass<string, number>('123');
//
// // Встроенные дженерики
//
// // Array
// const array = new Array<string>();
//
// // ReadonlyArray
//
// const readOnlyArray: ReadonlyArray<string> = ['123', '123', '45'];
//
// // Promise
//
// // new Promise<string>()
//
//
// // Omit
//
// type InvalidFish = Omit<Fish, 'swim' | 'kind'>;
//
// const invalidFish: InvalidFish = {kind: AnimalKind.Fish};
//
// // Pick
//
// type OnlySwim = Pick<Fish, 'swim'>;
//
// const onlySwimVar: OnlySwim = {swim: () => {}};
//
// // Record
//
// const animals: Record<AnimalKind, string> = {
//     [AnimalKind.Cat]: '',
//     [AnimalKind.Dog]: '',
//     [AnimalKind.Bird]: '',
//     [AnimalKind.Fish]: '',
//     [AnimalKind.Lion]: '',
// };
//
// type AnimalMap = Record<AnimalKind, string>;
//
// // Partial
//
// const partialAnimal: Partial<Record<AnimalKind, string>> = {
//     [AnimalKind.Cat]: '',
//     [AnimalKind.Dog]: '',
//     [AnimalKind.Bird]: '',
// }
//
// // Required
//
// const requiredAnimal: Required<Partial<Record<AnimalKind, string>>> = {
//     [AnimalKind.Cat]: '',
//     [AnimalKind.Dog]: '',
//     [AnimalKind.Bird]: '',
//     [AnimalKind.Fish]: '',
//     [AnimalKind.Lion]: '',
// }
//
// type requiredAnimals = AnimalKind.Cat | AnimalKind.Dog;
//
// const partialRequired: Required<Pick<AnimalMap, requiredAnimals>> &
//     Partial<Omit<AnimalMap, requiredAnimals>> & Readonly<Pick<AnimalMap, AnimalKind.Lion>> = {
//     [AnimalKind.Cat]: '',
//     [AnimalKind.Dog]: '',
//     [AnimalKind.Lion]: '',
// }
//
//
