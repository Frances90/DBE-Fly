function openBuchung(id) {
    const forms = document.getElementsByClassName("buchung-formular");
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }

    // Gewünschtes Formular anzeigen
    document.getElementById(id).style.display = "flex"; 
}

const elementAnzahl = document.getElementById("flug_anzahl");
const elementNonstop = document.getElementById("flug_nonstop");

function windowSize(){
    if (window.innerWidth <= 600) {
        console.log("Mobile Ansicht");
        const zielContainerMobil = document.getElementById("container_mobil");
        zielContainerMobil.appendChild(elementAnzahl);
        zielContainerMobil.appendChild(elementNonstop);
    } else {
        const zielContainerDesktop = document.getElementById("zusatz_info");
        zielContainerDesktop.appendChild(elementAnzahl);    
        zielContainerDesktop.appendChild(elementNonstop);


        console.log("Desktop Ansicht");
    }
}

windowSize();


window.addEventListener("resize", function(){
    windowSize();
});



