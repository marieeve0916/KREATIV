/** Le script ne fonctionne pas correctement **/
// Empêcher le défilement sur la page lorsque le menu burger est ouvert
let ScheckBox = document.querySelector("#case-bouton-burger");
let Sbody = document.querySelector("body");

ScheckBox.addEventListener("click", gererDefilement);

function gererDefilement() {
    if (ScheckBox.checked == true) {
        Sbody.style.overflow = "hidden";
    } else {
        Sbody.style.overflow = "scroll";
    }
}

let boutons = document.querySelectorAll(".menu a");

for (let unBouton of boutons) {
    unBouton.addEventListener("click", controlerAffichageMenu);
}

function controlerAffichageMenu() {
    if (ScheckBox.checked == true) {
        ScheckBox.checked = false;
        Sbody.style.overflow = "scroll";
    }
}