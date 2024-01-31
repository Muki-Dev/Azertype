function afficherResultat(score,nbMotsProposes){
    // on affiche le score de l'utilisateur
    let spanScore = document.querySelector('.zoneScore span');
    let affichageScore = ` ${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
}





function lancerJeu(){
    let score = 0;
    let nbMotsProposes = 0;

    let zoneEcriture = document.getElementById('inputEcriture');

    let btnValiderMot = document.getElementById('btnValiderMot');
    
    btnValiderMot.addEventListener('click',()=>{
        console.log(zoneEcriture.value);
    })
    
    
    afficherResultat(score,nbMotsProposes);
}
