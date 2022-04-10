export const test = 123;

// // Decorators
//
// export type Constructor = new (...args: any[]) => {};
// //
// // const addMoveFunction = (Target: Constructor) => {
// //     return class extends Target {
// //         speed: number = 0;
// //
// //         move(): void {
// //             console.log('move');
// //         }
// //     }
// // }
// //
// // @addMoveFunction
// // class Horse {
// //
// //     test() {
// //
// //     }
// // }
// //
// //
// // const horse = new Horse();
//
// const measure = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
//     const originalMethod = descriptor.value;
//
//     descriptor.value = function () {
//         console.log('start');
//         originalMethod.apply();
//         console.log('finish');
//     };
//
//     return descriptor;
// };
//
// class Horse {
//
//     @measure
//     test() {
//         console.log('progress ... ')
//         return 'test';
//     }
//
//     @measure
//     test1() {
//         console.log('progress ... ')
//         return 'test';
//     }
// }
//
// const horse = new Horse();
//
// horse.test1();
// horse.test();
