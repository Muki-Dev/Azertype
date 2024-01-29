//  Déclarez une variable listeMots qui est un tableau
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

// Déclarez une deuxième variable score
let score = 0;


let motUtilisateur = prompt("Entrez le mot: " + listeMots[0]);
if(motUtilisateur === listeMots[0]){
    score++
}

 motUtilisateur = prompt("Entrez mot: " + listeMots[1]);
if(motUtilisateur === listeMots[1]){
    score ++;
}

 motUtilisateur = prompt("Entrez mot: " + listeMots[2]);
if(motUtilisateur === listeMots[2]){
    score ++;
}

console.log(score);
