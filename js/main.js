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
var flugListe = document.querySelector("#container_flugdaten");
var checkbox = document.getElementById("nonstop");
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
    flugListe.innerHTML = "";
    console.log("Checkboxwert: " + checkbox.checked);
    for(let i = 0; i<flugdaten.length; i++){
        
        let flugStart = flugdaten[i].start;
        let flugZiel = flugdaten[i].ziel;

        let flugStartKlein = flugStart.toLowerCase();
        let flugZielKlein = flugZiel.toLowerCase();

        if(flugStartKlein.includes(vonWert.toLowerCase()) && flugZielKlein.includes(nachWert.toLowerCase()) ){
            
            flugListe.innerHTML += `<div id="flugdaten">
                                    <div class="fluginfo">
                                        <div id="containerInfo">
                                            <div class="flugzeit">
                                                <strong>10:10</strong><br>
                                                <span>${flugdaten[i].start}</span>
                                            </div>
                                            
                                            <div class="flugdetails">
                                                <div class="line"></div>
                                                <div id="design_stops">
                                                <span>${flugdaten[i].stops}<br>Stopp</span>
                                                </div>
                                            </div>
                                            
                                            <div class="flug_ankunft">
                                                <strong>12:45</strong><br>
                                                <span>${flugdaten[i].ziel}</span><br>
                                                <small>${flugdaten[i].terminal}</small>
                                            </div>
                                        </div>
                                        <div class="flug_dauer">
                                                <img src="/resources/clock-outline.svg" alt="Uhr" class="icon" />
                                                ${flugdaten[i].flugdauer}
                                        </div>
                                    </div>

                                    <div class="flug_preise">
                                        <div class="preis_optionen" id="eco">
                                            <span class="preisstufe">Economy</span>
                                            <strong>ab 
                                                <div class="preis">${flugdaten[i].preis.economy}</div>
                                            </strong>
                                            <span></span>
                                            <div class="dropdown-arrow">
                                                <img src="/resources/chevron-down.svg" alt="" id="chevron">
                                            </div>
                                        </div>
                                        <div class="preis_optionen" id="business">
                                            <span class="preisstufe">Business</span>
                                            <strong>ab 
                                                <div class="preis">${flugdaten[i].preis.business}</div>
                                            </strong>
                                            <span></span>
                                            <div class="dropdown-arrow">
                                                <img src="/resources/chevron-down.svg" alt="" id="chevron">
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
        }
        






        console.log(flugdaten[i].ziel);
    }
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

