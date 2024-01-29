//  Déclarez une variable listeMots qui est un tableau
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

// Déclarez une deuxième variable score
let score = 0;

// À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !
let motUtilisateur = prompt("Entrez le premier mot de la liste: " + listeMots[0]);
if(motUtilisateur === listeMots[0]){
    score += 1;
    console.log(score);
}else{
    console.log("Vous avez fait une erreur de frappe, ressayer enocre!")
}


// À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !
 motUtilisateur = prompt("Entrez le premier mot de la liste: " + listeMots[1]);
if(motUtilisateur === listeMots[1]){
    score += 1;
    console.log(score);
}else{
    console.log("Vous avez fait une erreur de frappe, ressayer enocre!")
}


// À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !
 motUtilisateur = prompt("Entrez le premier mot de la liste: " + listeMots[2]);
if(motUtilisateur === listeMots[2]){
    score += 1;
    console.log(score);
}else{
    console.log("Vous avez fait une erreur de frappe, ressayer enocre!")
}
