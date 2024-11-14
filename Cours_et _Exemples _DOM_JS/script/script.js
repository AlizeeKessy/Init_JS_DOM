/*
CODE HTML

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Document</title>
</head>

<body>
    <h1>Titre Principal</h1>
    <p id="p1">Un paragraphe <span class="rouge">avec un span</span></p>
    <section>
        <p id="=p2">un paragraphe dans la section</p>
        <p>Un autre paragraphe dans la section</p>
    </section>
    <p>Un autre paragraphe</p>
    <script src="script/script.js"></script>
</body>

</html>


CODE CSS

span.rouge {
    color: #f00;
  }
*/



/*
let bBody = document.body;

let newP = document.createElement("p");
let newTexte = document.createTextNode("Texte écris en JS");

newP.textContent = 'Paragraphe créé et inséré grace à JS';

//Ajoute le paragraphe créé comme premier enfant de l'élément body
b.prepend(sNewParagraphe);

b.append(newTexte);
//Ajoute le paragraphe créé comme dernier enfant de l'élément body
*/

/*
Les différences entre append() de ParentNode et appendChild() de Node 
sont les suivantes : • La méthode append() permet également d’ajouter 
directement une chaine de caractères tandis que appendChild() n’accepte 
que des objets de type Node ; • La méthode append() peut ajouter plusieurs 
noeuds et chaines de caractères au contraire de appendChild() qui ne peut 
ajouter qu’un noeud à la fois ; • La méthode append() n’a pas de valeur de 
retour, tandis que appendChild() retourne l’objet ajouté.
*/


// let b = document.body;
// let newP = document.createElement("p");
// let newTexte = document.createTextNode("Texte inséré avec appendChild()");

// newP.textContent = 'Paragraphe créé et inséré grace à JS';

//Ceci fonctionne
//bBody.append(newP,"Texte inséré avec appendChild()");

//Ceci fonctionne
//bBody.appendChild(newTexte);
/*Ceci ne fonctionne pas : bBody.appendChild("Paragraphe créé et inséré grace à JS")
Ceci ne fonctionne pas non plus : bBody.appendChild(sNewParagraphe,newTexte)

/*
On peut encore utiliser la méthode insertBefore() de l’interface Node qui permet
pour sa part d’insérer un noeud en tant qu’enfant d’un autre noeud juste avant
un certain noeud enfant donné de ce parent.
*/
// let bBody = document.body;
// let p1 = document.getElementById('p1');
// let sNewParagraphe = document.createElement("p");
// sNewParagraphe.textContent = 'Paragraphe créé et inséré grâce à JS';

// bBody.insertBefore(sNewParagraphe,p1);

/*
• beforebegin : Insère le ou les noeuds avant l’élément ; 
• afterbegin : Insère le ou les noeuds avant le premier enfant de l’élément ; 
• beforeend : Insère le ou les noeuds après le dernier enfant de l’élément ; 
• afterend : Insère le ou les noeuds après l’élément.
*/
// let b = document.body;
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');
// let newp = document.createElement("p");
// let htmlContent = "<strong> et du texte important </strong>";

// newp.textContent = 'Paragraphe créé et inséré grâce à JS';

// //Ajoute un paragraphe au p1
// p1.insertAdjacentElement('afterend', newp);

// //Ajoute du contenu de htmlContent avant la balise fermante de p1
// p1.insertAdjacentHTML('beforeend', htmlContent);

// //Ajoute du texte après la balise ouvrante du p2
// p2.insertAdjacentText('afterbegin',"texte ajouté dans ");


/*
Déplacer un noeud dans le DOM : 
Pour déplacer un noeud dans le DOM, on peut utiliser l’une 
des méthodes appendChild() ou insertBefore() de Node en leur 
passant en argument un noeud qui existe déjà et qui est déjà
 placé dans le DOM. Dans ce cas-là, les méthodes vont déplacer 
 le noeud dans le DOM vers la nouvelle position indiquée.
*/

// let b = document.body;
// let p1 = document.getElementById('p1');
// let p4 = b.lastElementChild; //on accède au dernier paragraphe

// //On deplace p1 juste avant p4 dans le DOM
// b.insertBefore(p1, p4);


/*
Cloner ou remplacer un noeud dans le DOM Pour cloner un noeud, 
on peut utiliser la méthode cloneNode() de Node qui renvoie une copie 
du noeud sur lequel elle a été appelée. Cette méthode prend un booléen
en argument. Si la valeur passée est true, les enfants du noeud seront
également clonés. Si on lui passe false, en revanche, seul le noeud
spécifié sera cloné.
Pour remplacer un noeud, on utilisera plutôt la méthode replaceChild() 
de cette même interface qui va remplacer un certain noeud par un autre.
*/

// let b = document.body;
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');
// let p4 = b.lastElementChild; //on accède au dernier paragraphe
// let newP = document.createElement("p");// on crée un nouveau noeud
// newP.textContent = 'Paragraphe créé et inséré grâce à JavaScript';

// //On clone p1 et on insert le clone après p2
// let clonep1 =p1.cloneNode(true);
// p2.insertAdjacentElement('afterend', clonep1);

// //On remplace p4 par le newP
// b.replaceChild(newP,p4 );

/*
Supprimer un noeud du DOM Pour supprimer totalement un noeud du DOM, 
on peut déjà utiliser la méthode removeChild() de Node qui va supprimer
 un noeud enfant passé en argument d’un certain noeud parent de 
 l’arborescence du DOM et retourner le noeud retiré. On peut également 
 utiliser la méthode remove() du mixin ChildNode() qui permet tout simplement 
 de retirer un noeud de l’arborescence et qui dispose aujourd’hui d’un bon 
 support par les navigateurs (cette façon de faire est plus récente 
 que la précédente).
//  */


// let b = document.body;
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');

// //Supprime p1 du DOM et renvoie le noeud supprimé
// let eltDel = b.removeChild(p1);

// //Supprime p2 du DOM
// p2.remove();
// alert("Noeud supprimé du DOM : "+ eltDel + "\nContenu : " + eltDel.textContent);






/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style/style.css">
    <title>Document</title>

</head>

<body>
    <h1>Titre Principal</h1>
    <p id="p1" class="blue">Un paragraphe <span>avec un span</span></p>
    <div>
        <p id="p2">un paragraphe dans le div</p>
        <p>Un autre paragraphe dans le div</p>
    </div>
    <p>Un autre paragraphe</p>
    <p id="vide"></p>
    <script src="script/script.js"></script>
</body>

</html>


Tester la présence d’attributs. 

La méthode hasAttribute() de l’interface 
Element nous permet de tester la présence d’un attribut en particulier 
pour un élément. Cette méthode prend en argument le nom de l’attribut 
qu’on recherche et renvoie la valeur booléenne true si l’élément possède 
bien cet attribut ou false sinon.
*/
// let p1 = document.querySelector("p");


// console.log(p1);
// let vide = document.getElementById("vide");


// /*Si p1 possède des attributs, hasAttributes() renvoie true et on execute
// le code de la condition*/
// if(p1.hasAttributes()){
//     vide.textContent = "mon premier paragraphe possède des attributs ";
// }

// /*Si p1 possède un attribut id, hasAttributes() renvoie true*/
// if(p1.hasAttribute("id")){
//     vide.textContent += "dont un attribut id qui est " + p1.getAttribute("id");
// }

/*
Récupérer la valeur ou le nom d’un attribut ou définir un attribut 

La propriété attributes de l’interface Element renvoie la liste des attributs 
d’un (noeud) élément spécifié. La liste d’attributs est renvoyée sous la forme 
« clef / valeur » et est un objet de l’interface NamedNodeMap . 
L’interface NamedNodeMap est une interface qui sert à représenter des ensembles 
d’objets de l’interface Attr. L’interface Attr sert à représenter les attributs 
des éléments du DOM sous forme d’objets. On va pouvoir récupérer les noms et 
valeurs de chaque attribue en utilisant une boucle for pour itérer dans cette 
liste et les propriétés name et value de l’interface Attr.
*/

let p1 = document.querySelector("p");
let vide = document.getElementById("vide");

if (p1.hasAttributes()) {
    let attP1 = p1.attributes; // Liste des attributs de p1
    vide.textContent = "Liste des attributs de p1 : <br>";
    //La propriété length renvoie le nombre d'attributs
    for(let i = 0; i < attP1.length; i++){
        vide.innerHTML += attP1[i].name + "=" + attP1[i].value + "<br>";
    }
}