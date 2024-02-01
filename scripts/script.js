function afficherResultat(score,nbMotsProposes){
    // on affiche le score de l'utilisateur
    let spanScore = document.querySelector('.zoneScore span');
    let affichageScore = ` ${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
}



function afficherProposition(proposition){
    let zoneProposition = document.querySelector('.zoneProposition');
    zoneProposition.innerHTML = proposition;   
}

function lancerJeu(){
    let score = 0;
    let i = 0;
    let listesProposition = listeMots;

    let zoneEcriture = document.getElementById('inputEcriture');

    let btnValiderMot = document.getElementById('btnValiderMot');

    afficherProposition(listesProposition[i]);

    btnValiderMot.addEventListener('click',()=>{
        if(zoneEcriture.value === listesProposition[i]){
            score++
        }
        i++;
        afficherResultat(score,i);
        inputEcriture.value = '';
        if(listesProposition[i] === undefined){
            afficherProposition('Le jeu est fini');
            btnValiderMot.disabled = true;
        }else{
            afficherProposition(listesProposition[i]);
        }
    })

    let listeBtnRadio = document.querySelectorAll('.optionSource input');
    
    for(let index = 0; index < listeBtnRadio.length; index++){
        listeBtnRadio[index].addEventListener('change',(event) =>{
            console.log(event.target.value);
            if(event.target.value === "1"){
                listesProposition = listeMots;
            }else{
                listesProposition = listePhrases;
            }
            afficherProposition(listesProposition[i]);
        })
    }
    afficherResultat(score,i);
}
