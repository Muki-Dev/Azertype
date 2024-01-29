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
    console.log("Le score de mot est: " + score + "/" + listeMots.length);
}else if(choix === "Phrases"){
    // Repeter le code avec une boucle
    for(let i = 0 ; i < listePhrases.length ; i++){
        let motUtilisateur = prompt("Tapez la phrase: " + listePhrases[i]);
        if(motUtilisateur === listePhrases[i]){
            score++;
        }
    }
    console.log("Le score de phrase est: " + score + "/" + listePhrases.length);
}else{
    console.log("le score est" + score);
}

