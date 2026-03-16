// Les variables et types
// Le typage est dynamique

// number
let myNumber = 10;
let myNumber2 = 10.0;
let myNumber3 = 1067468767676;

// BigInt
let myBigInt = 9007199254740991;

// string
let myString = "hello"

// booleen
let myBool = true;

// undefined : variable non-initialisée
let myUndefined = undefined;

// null
let myNull = null;


let myObject = 
{
    Name : "bob",
    Age : 35
}
// acces au propriétés d'un objet
 myObject.Name

// Tableaux
let myArray = [1,2,3]


// Recuperation du type d'une variable
let valueToTest = 42;

//  le type est number
const typeOfValue = typeof valueToTest;


// NaN : Not a number represente une valeur numerique invalide
let myNan = NaN;

// Comparaison de NaN = false
console.log(NaN == NaN)

// pour verifier le NaN utilisez la methode : isNaN()
console.log(isNaN(NaN))

// Infinity : represente une valeur infinie
let myInfinity = Infinity;