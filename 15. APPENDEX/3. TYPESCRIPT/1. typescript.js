"use strict";
//Types in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// boolean
let isCool = true;
// number
let age = 22;
// String
let eyeColor = 'Black';
let mySelf = `I'm Dev, ${age} year old`;
// Array
let pets = ['cat', 'dog', 'horse'];
let pets2 = ['lion', 'dragon', 'lizard'];
// Object
let wizard = {
    a: 'john'
};
// null and undefined
let meh = undefined;
let noo = null;
// Tuple
let basket;
basket = ['basketball', 5]; //sequence sensetive
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size.Small;
// Any - (be carefull)
let whatever = 'ohhhhhhh noooooooo!!!';
whatever = basket;
// void
let sing = () => {
    console.log('lalalalalala');
};
// never
let error = () => {
    throw Error('ooops');
};
let fightRobotArmy = (robots) => {
    console.log('Fight!');
};
let fightRobotArmy2 = (robots) => {
    console.log('Fight!');
};
let dog = {};
dog.count;
// Function
let fightRobotArmy3 = (robots) => {
    console.log('Fight!');
};
let fightRobotArmy4 = (robots) => {
    console.log('Fight!');
    return 5;
};
// classes
class Animal {
    sing = 'allalallaal';
    constructor(sound) {
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal(`RAAAWWWR`);
lion.sing;
//# sourceMappingURL=1.%20typescript.js.map