// recuperation d'une valeur depuis le prompt
let response = prompt("Entrez une valeur")

// Affichage du type et de la valeur 
console.log(response)
console.log(typeof response)


// Conversion simple en type number ne garde pas les valeurs decimales
let responseNumber = parseInt(response)

console.log(responseNumber)
console.log(typeof responseNumber)

// float permet de garder les valeurs decimales
let responseNumberFloat = parseFloat(response)

console.log(responseNumberFloat)
console.log(typeof responseNumberFloat)


// BigInt : prevu pour les valeur superieur à number

let myBigInt = BigInt("357464343657434")

// ------------------------------------------------

let a = 5;
let b = 10;

let addition = a + b;
let soustraction = a - b;
let division = a / b;
let multiplication = a * b;
let modulo = a % b;
let puissance = a ** b;

// raccourci d'ecriture
a = a + 5;
let additionShort       = a += 5;
let soustractionShort   = a -= 5;
let divisionShort       = a /= 5;
let multiplicationShort = a *= 5;
let moduloShort         = a %= 5;
let puissanceShort      = a **= 5;


// raccourci d'increment et de decrement

// post increment et decrement
let valueIncrement = a++;
let valueDecrement = a--;

// pre Decrement et increment
let valueUptadedInc = ++a;
let valueUptadedDec = --a;

// Number 

// la valeur maximum de number
Number.MAX_VALUE
// la valeur minimum de number
Number.MIN_VALUE

// Et un entier
let resultIsInt = Number.isInteger("1000");


// Math
Math.PI

Math.floor("5.4") // retourne l'entier inferieur ou égale
Math.ceil("5.6") // retourne l'entier superieur ou égale

Math.round("5.7") // arrondi mathematique

Math.random() // genere une valeur aleatoire 

// generation de valeur entiere aleatoire
console.log(Math.round( Math.random() * 100))