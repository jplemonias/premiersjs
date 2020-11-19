var overChrono = document.querySelector("#chrono");
var time = document.querySelector("#time");
var timeTxt = document.querySelector("#time").textContent;

//On réccupère la date actuelle
const saveDate = new Date();
//On lui ajoute 20 mins => 20mins.60secs.1000ms
saveDate.setTime(saveDate.getTime() + (20 * 60 * 1000));

function timing() {
    time.removeAttribute("class")
    //On réccupère la date actuelle
    var now = new Date();
    //On réccupère la difference entre la date actuel et la date de fin de 
    //compte à rebourdsouhaité en valeur absolue
    var freeEnS = Math.trunc((saveDate - now) / 1000)
    //SI la valeur absolue est > zéro 
    if (freeEnS > 0) {
        //On réccupère l'entier du quotiant ( soit le mins )
        var quot = Math.trunc(freeEnS / 60)
        //On réccupère le modulo ( soit le secs )
        var mod = freeEnS % 60
        //On réccupère les valeurs qu'oin veut afficher
        var hr = now.getHours()
        var hr2 = now.getHours()
        var min = now.getMinutes()
        var sec = now.getSeconds()
        var to = saveDate.getMinutes()
        //On ajoute les conditions pour l'affichage du timer
        //par exemple "01:23" sera renvoyé "1:23"
        if (hr >= 1 && hr < 10) {
            hr = "0" + hr
        }
        if (hr2 < 10) {
            hr2 = "0" + hr2
        }
        if (min < 10) {
            min = "0" + min
        }
        if (mod < 10) {
            mod = "0" + mod
        }
        if (quot < 10) {
            quot = "0" + quot
        }
        if (sec < 10) {
            sec = "0" + sec
        }
        if (to >= 60) {
            to = to - 60
            to = "0" + to
        }
        if (min >= 40 && min <= 49) {
            hr2 = hr2 + 1
            //to = to - 60
            to = "0" + to
        }
        if (min >= 50 && min <= 59) {
            hr2 = hr2 + 1
        }
        time.textContent = "Il est " + hr + ":" + min + " et " + sec + " secondes\r\n"
        time.textContent += "Le timer s'arretera à " + hr2 + ":" + to + "\r\n"
        time.textContent += "soit dans : " + quot + ":" + mod + " minuses."
    }
    if (freeEnS <= 0) {
        time.innerHTML = '\nCompte à rebours terminé.\n\n';
    }
    setTimeout("timing()", 1000);
}

overChrono.addEventListener("click", timing, { once: true })