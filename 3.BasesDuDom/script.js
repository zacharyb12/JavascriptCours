// Le DOM : Document object model
// Permet de manipuler la page html sous forme d'une arboresence

// On peut  modifier du style
// On peut ajouter action lors d'evenements
// On peut Gerer des formulaires 


// cibler un element du dom 

// Selectionne un element
let myH1 = document.querySelector()
// Selectionne plusieurs elements
let myH12 = document.querySelectorAll()

// selection par un id
let myH13 = document.getElementById();
// selection par une classe 
let myH14 = document.getElementsByClassName();

// recuperation d'une balise
let h1 = document.getElementsByTagName("h1");

// Affichage de la balise h1
console.log(h1)

// modification de la balise h1
h1.style.backgroundColor = "red";


// Plusieurs possibilités de recuperation

// un element unique 
let myItemId = document.getElementById("myId")

// une collection d'elements
let myResultClass = document.getElementsByClassName("myClasse");
myResultClass[0];// recupere un element de la collection


// Nouvelle methode avec les querySelector
// recuperation avec le # pour les id et le . pour les classes
let pId = document.querySelector("#un")
let pClasse = document.querySelector(".deux")

console.log(pId)
console.log(pClasse)

// Contenu html de la balise non echappé
pId.innerHTML = "Hello";

// Contenu html de la balise non echappé
pId.textContent = "hello world"


// --------------------------------------------------
// Manipulation des classes

let myP = document.querySelector("#myP")

// affiche l'élément recupérer
console.log(myP)

// affiche les classes de l'élément
console.log(myP.className)

// classList permet de manippuler les classes

// Remplace une classe par une autre
myP.classList.replace("un","deux")

// verifie si une classe est contenu
let isContains = myP.classList.contains("deux")

// ajouter une classe
myP.classList.add("shadow");
// retirer une classe
myP.classList.remove("shadow");

// si la classe n'est pas contenu on l'ajoute sinon on la retire
myP.classList.toggle("shadow")
myP.classList.toggle("shadow")

console.log(myP.className)