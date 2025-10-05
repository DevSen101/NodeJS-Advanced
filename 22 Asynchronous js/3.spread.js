// object spread operator(ES 2018)
const animals = {
 tiger: 15,
 lion: 20,
 bird: 7,
 monkey: 10
}

const {tiger, ...rest} = animals// now tiger: 23, rest = {lion:5, monkey: 2}

// ----------------------
// break it down
function objectSpread(p1,p2,p3){
 console.log(p1);
 console.log(p2);
 console.log(p3);

}

// const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest)

// -----------------
const arr = [1,2,3,4,5,6]

function sum(a,b,c,d,e,f){
 return a+b+c+d+e+f
}

// sum(arr) //throw err
sum(...arr) //21