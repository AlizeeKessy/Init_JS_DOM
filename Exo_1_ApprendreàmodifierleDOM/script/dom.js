/*Lire le DOM
•	afficher le texte de la balise ayant l'id 'titre2'*/
// let b = document.body;
// let textId_2 = document.getElementById("titre2").textContent;

// console.log("afficher le texte de la balise ayant l'id 'titre2 : ",textId_2);
// alert(" afficher le texte de la balise ayant l'id 'titre2 : "+textId_2);






// /*•	afficher le nombre de balises ayant la classe 'titre'*/
// /*• afficher le texte de toutes les balises ayant la classe 'titre'.'*/


// const bBalise = document.querySelectorAll('h1, h2');
// let i = 0;
// for(i=0; i < bBalise.length; i++) {
//    console.log(bBalise[i].tagName," ",bBalise[i].textContent);
//    alert(bBalise[i].tagName +" " + bBalise[i].textContent);
// }




// // /*•	afficher le texte de toutes les balises 'li'*/

// const bBalise = document.getElementsByTagName("li");
// let i = 0;
// for(i=0; i < bBalise.length; i++) {
//    console.log(bBalise[i].textContent);
//    alert(bBalise[i].textContent);
//    console.log(liste);
// }





/* Modifier le DOM
• changer le contenu du h1 en 'Bienvenue'
• changer le contenu du h2 en 'Exo JS'
• changer le contenu de chaque point (li) de la liste en "Liste 1", "Liste 2", etc...
• faire disparaître la liste
*/

let b = document.body;
let textId_1 = document.getElementById('titre1').textContent = "Bienvenue";
let textId_2 = document.getElementById('titre2').innerText = "Exo JS";
let pText = document.getElementById('paragraphe1').innerText = "Voici quelques fonctions exécutées en javascript";
let modifElt = document.querySelectorAll('li')[0,1,2,3,4].addEventListener("Liste 1",this.modifier);
function modifier() {
    // return console.log("ccececece");
var modifElt = prompt("modifier le nom du dessert :");
// var dessertElt = document.querySelectorAll("li")[i];
this.textContent = modifElt;
}


/*
Modifier le style

• aligner le titre 1 au centre de la page
• mettre en rouge tous les éléments ayant la classe 'titre'
• mettre une bordure 'solid 1px black' et un padding '10px' au paragraphe
• faire disparaître la liste
*/