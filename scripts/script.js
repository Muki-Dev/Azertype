function afficherResultat(score,nbMotsProposes){
    // on affiche le score de l'utilisateur
    let spanScore = document.querySelector('.zoneScore span');
    let affichageScore = ` ${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
}





function lancerJeu(){
    let score = 0;
    let nbMotsProposes = 0;
    
    afficherResultat(score,nbMotsProposes);
}
