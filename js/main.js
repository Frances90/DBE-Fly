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
var btbSuche = document.getElementById("btn_suche");
var flugVon = document.getElementById("input_von");
var flugNach = document.getElementById("input_nach");
var flugdaten;

function jsonAuslesen () {
    if(window.XMLHttpRequest){
    var request = new XMLHttpRequest();
    request.open("GET", "./json/flugdaten.json");
            
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
                     flugdaten = JSON.parse(request.responseText);
                    console.log(flugdaten);
                    /* document.getElementById("textinc").innerHTML = daten.name; */
        }
            }
            request.send();

        }else{
            alert("Warnung: XMLHttpRequest nicht vorhanden!");
        }
}

jsonAuslesen();

btbSuche.addEventListener("click", function(){
    var vonWert = flugVon.value;
    var nachWert = flugNach.value
    console.log("Flug von: " + vonWert + " Flug nach: " + nachWert);

    for(let i = 0; i<flugdaten.length; i++)
        console.log(flugdaten.length + " " + i);
});




function windowSize(){
    if (window.innerWidth <= 629) {
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

