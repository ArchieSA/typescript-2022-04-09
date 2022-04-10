// // // Mixins
// //
// // class Animal {
// //     feed(): void  {
// //         console.log('eat');
// //     }
// // }
// //
// // class Movable {
// //     sped: number = 0;
// //
// //     move(): void {
// //         console.log('move');
// //     }
// // }
// //
// // class Horse {
// //
// // }
// //
// // interface Horse extends Animal, Movable {}
// //
// // function applyMixins(baseClass: any, extendClasses: any[]) {
// //     extendClasses.forEach((extendClass) => {
// //         Object.getOwnPropertyNames((extendClass.prototype)).forEach(name => {
// //             baseClass.prototype[name] = extendClass.prototype[name];
// //         })
// //     });
// // }
// //
// // applyMixins(Horse, [Animal, Movable]);
// //
// // let horse: Horse = new Horse();
// //
// // horse.feed();
// // horse.move();
//
//
// class Animal {
//     feed(): void  {
//         console.log('eat');
//     }
// }
//
// class Horse extends Animal{}
//
// const horse = new Horse();
//
// type Constructor = new (...args: any[]) => {};
//
// function TeachMove<BaseType extends Constructor>(Base: BaseType) {
//     return class extends Base {
//         speed: number = 0;
//
//         move(): void {
//             console.log('move');
//         }
//     }
// }
//
// const MovableHors = TeachMove(Horse);
//
// const movableHorse = new MovableHors();
//
// movableHorse.move();