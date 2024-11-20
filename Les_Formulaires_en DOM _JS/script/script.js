/* 
CODE HTML

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" id="form1" onSubmit="return checkForm(this);">
        <input type="text" name="chp" value="essai" />
        <input type="submit" value="Valider" />
    </form>
    <script src="script/script.js"></script>
</body>

</html>
*/

/*SCRIPT*/

// function checkForm(f) { 
//     alert("Contrôle champ " + f.elements['chp'].value); 
//     return false; // n’envoie pas le formulaire 
//     }

/* 01*/
function checkForm(f) 
{ alert("Vous vous appelez : " + f.elements['nom'].value + " " + f.elements['prenom'].value);
    return false; // do not submit the form 
}


/* 02*/
function livre(auteur, editeur, prix) { 
    this.auteur = auteur; 
    this.editeur = editeur; 
    this.prix = prix; 
} 
    
var l1 = new livre("monAuteur", "monEditeur", 15.0); 
document.write("Mon Auteur '" + l1.auteur + "' vaut " + l1.prix + " euros.");
