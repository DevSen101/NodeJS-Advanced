//Types in TypeScript
// boolean
var isCool = true;
// number
var age = 22;
// String
var eyeColor = 'Black';
var mySelf = "I'm Dev, ".concat(age, " year old");
// Array
var pets = ['cat', 'dog', 'horse'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5]; //sequence sensetive
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - (be carefull)
var whatever = 'ohhhhhhh noooooooo!!!';
whatever = basket;
// void
var sing = function () {
    console.log('lalalalalala');
};
// never
var error = function () {
    throw Error('ooops');
};
