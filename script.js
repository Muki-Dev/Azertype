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

function choisirPhrasesOuMots(){
    // Tant que l'utilisateur n'a pas choisis "mots" ou "phrases",on lui redemande
    let choix = prompt("Voulez-vous jouez avec les mots (entrez 'mots') ou les phrases (entrez 'phrases')");
    if(choix !== "mots" && choix !== "phrases"){
        choix = prompt("Vous devez choisir entre 'mots' ou 'phrases'");
    }

    return choix;
}

function lancerBoucleDeJeu(listesPropositions){
    let score = 0;
    for(let i = 0 ; i < listesPropositions.length ; i++){
        motUtilisateur = prompt("Entrez le mot: " + listesPropositions[i])
        if(motUtilisateur === listesPropositions[i]){
            score++
        }
    }
    return score;
}