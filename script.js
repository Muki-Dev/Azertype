//  Déclarez une variable listeMots qui est un tableau
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

// Déclarez un tableau listePhrases
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];

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

function lancerJeu(){
    let choix = choisirPhrasesOuMots();
    let score = 0;
    let nbMotsProposes = 0;
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length;
    }else{
        score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length;
    }

    afficherResultat(score,nbMotsProposes)
}

lancerJeu();