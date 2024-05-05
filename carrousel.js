/********* LES VARIABLES *********/
let imgIndex = 1; //Index d'une image
let boutonSuivant = document.querySelector(".bouton-img-suivante"); // Correspond au bouton "suivant" du carrousel
let boutonPrecedent = document.querySelector(".bouton-img-precedente"); // Correspond au bouton "précedent" du carrousel
let lesImages = document.getElementsByClassName("les-images"); // Variable contenant tous les éléments de la classe "les-images"

// Détecter si l'utilisateur a cliqué sur une des flèches du carrousel
// Le paramètre correspond au sens du déplacement des images du carrousel
boutonSuivant.addEventListener('click', function(){
    changerImage(1);
});

boutonPrecedent.addEventListener('click', function(){
    changerImage(-1);
});

// Associer un index à une image et l'afficher
montrerUneImage(imgIndex);

// Fonction pour contrôler le changement d'image par les boutons
function changerImage(numeroSuivantPrecedent) {
    montrerUneImage(imgIndex += numeroSuivantPrecedent);
}

// Fonction pour afficher une image
function montrerUneImage(nouvelIndex) {
    
    // Si le numéro de l'image est plus grand que le nombre d'images, on fait apparaître la première image
    if (nouvelIndex > lesImages.length) {
        imgIndex = 1;
    }

    // Si le numéro de l'image est plus petit que 1, on montre la dernière image
    if (nouvelIndex < 1) {
        imgIndex = lesImages.length;
    }

    // Boucle for pour faire apparaître et disparaître les images
    for (let i = 0; i < lesImages.length; i++) {
        lesImages[i].style.display = "none";
    }

    lesImages[imgIndex - 1].style.display = "block";
}


