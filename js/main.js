function openBuchung(id) {
    const forms = document.getElementsByClassName("buchung-formular");
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }

    // Gewünschtes Formular anzeigen
    document.getElementById(id).style.display = "flex"; 
}