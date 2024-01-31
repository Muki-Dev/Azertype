function afficherResultat(score,nbMotsProposes){
    // on affiche le score de l'utilisateur
    let spanScore = document.querySelector('.zoneScore span');
    let affichageScore = ` ${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
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

    afficherResultat(score,nbMotsProposes);
}
