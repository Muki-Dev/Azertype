//  Déclarez une variable listeMots qui est un tableau
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

// Déclarez un tableau listePhrases
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];

// Déclarez une deuxième variable score
let score = 0;

// Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
let choix = prompt("tapez 'Mots' ou 'phrases'");
while(choix !== "Mots" && choix !== "Phrases"){
    choix = prompt("tapez 'Mots' ou 'phrases");
}
if(choix === "Mots"){
    // Repeter le code avec une boucle
    for(let i = 0 ; i < listeMots.length ; i++){
        let motUtilisateur = prompt("Tapez le mot: " + listeMots[i]);
        if(motUtilisateur === listeMots[i]){
            score++;
        }
    }
    console.log("votre score est: " + score + " sur " + listeMots.length);
}else{
    // Repeter le code avec une boucle
    for(let i = 0 ; i < listePhrases.length ; i++){
        let motUtilisateur = prompt("Tapez la phrase: " + listePhrases[i]);
        if(motUtilisateur === listePhrases[i]){
            score++;
        }
    }
    console.log("votre score est: " + score + " sur " + listePhrases.length);
}

function afficherResultat(score,nbMotsProposes){
    // on affiche le score de l'utilisateur
    console.log("votre score est " + score + " sur " + nbMotsProposes);
}