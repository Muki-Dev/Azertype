// let motTapezOK = false;
// if(motTapezOK){
//     console.log("Bravo, vous avez correctement tapé le mot");
// }else{
//     console.log("Échec, le mot n'est pas correct");

// }

// let motUtilisateur = prompt("Entrez un mot:");
// console.log(motUtilisateur);

let motApplication = "Bonjour";
let motUtilisateur = prompt("Entrez le mot " + motApplication);
if(motUtilisateur === motApplication){
    console.log("Bravo!")
}else{
    console.log("Vous avez fait une erreur de frappe.");
}