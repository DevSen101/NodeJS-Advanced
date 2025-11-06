//Types in TypeScript

// boolean
let isCool: boolean = true

// number
let age: number = 22

// String
let eyeColor: string = 'Black'
let mySelf: string = `I'm Dev, ${age} year old`

// Array
let pets: string[] = ['cat', 'dog', 'horse']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Object
let wizard: object = {
 a: 'john'
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// Tuple
let basket: [string, number]
basket = ['basketball', 5]  //sequence sensetive

// Enum
enum Size { Small = 1, Medium = 2, Large= 3}
let sizeName: number = Size.Small

// Any - (be carefull)
let whatever: any = 'ohhhhhhh noooooooo!!!'
whatever = basket

// void
let sing = (): void => {
 console.log('lalalalalala');
}

// never
let error = (): never => {
 throw Error('ooops')
}

// interface
interface RobotArmy {
 count: number,
 type: string,
 magic?: string  //may be or may not be include | optional
}

let fightRobotArmy = (robots: RobotArmy) => {
 console.log('Fight!');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
 console.log('Fight!');
}

// Type Assertion    /* Resource: https://basarat.gitbook.io/typescript/type-system/type-assertion */
interface catArmy {
 count: number,
 type: string,
 magic: string
}

let dog = {} as catArmy
dog.count


// Function
let fightRobotArmy3 = (robots: RobotArmy) : void => {
 console.log('Fight!');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}) : number => {
 console.log('Fight!');
 return 5;
}

// classes
class Animal{
 public sing: string = 'allalallaal'
 constructor(sound: string) {
  this.sing = sound
 }

 greet(): string{
  return `Hello ${this.sing}`
 }
}

let lion = new Animal(`RAAAWWWR`)
lion.sing