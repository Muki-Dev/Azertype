//  Déclarez une variable listeMots qui est un tableau
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

// Déclarez une deuxième variable score
let score = 0;

for(let i = 0 ; i < listeMots.length ; i++){
    let motUtilisateur = prompt("Tapez les 3 mots de la listes: " + listeMots[i]);
    if(motUtilisateur === listeMots[i]){
        score++
    }
}
console.log(score);
