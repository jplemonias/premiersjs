
function machinetypingEx() {
    var txtEx = document.querySelector("#exTxt")
    var cut = txtEx.innerHTML.split(/\<|\>/);
    txtEx.classList.toggle("hidden");
    var FinalTxt = "";
    for (i = 0; i < cut.length; i++) {
        if (i % 2 == 0) {
            FinalTxt = FinalTxt + "<span class='hidden fufuEx'>" + cut[i] + "</span>";
        } else {
            FinalTxt = FinalTxt + "<" + cut[i] + ">";
        }
        txtEx.innerHTML = FinalTxt;
    };

    var spaned = txtEx.querySelectorAll(".fufuEx");
    let tableTexte = new Array();
    for (i = 0; i < spaned.length; i++) {
        spaned[i].outerHTML = "<span class='provisoirEx'></span>" + spaned[i].outerHTML;

        tableTexte.push(spaned[i].innerHTML);
    };
    function intervalLettreEx() {
        intunesec = setInterval(ecriture, 5);
    };
    var x = 0;
    function ecriture() {
        var divprovisoirEx = document.querySelectorAll(".provisoirEx");
        var spanedEx = txtEx.querySelectorAll(".fufuEx");
        var lengthTable = tableTexte[x].length;
        var splitedEx = spanedEx[x].innerHTML.split("");
        var lettreEx = splitedEx.shift();
        var lettreExmoinsune = splitedEx.join('');
        var plusune = divprovisoirEx[x].innerHTML + lettreEx;
        divprovisoirEx[x].innerHTML = plusune;
        spanedEx[x].innerHTML = lettreExmoinsune;
        if (lettreEx === " ") {
            //console.log(" ");
        } else if (lettreEx === "(" || lettreEx === ")") {
            //console.log("( )");
        } else if (lettreEx === ".") {
            //console.log(".");
        } else {
            //console.log(plusune + " |   | " + lettreExmoinsune)
        }
        if (divprovisoirEx[x].innerHTML.length == lengthTable) {
            x++;
        }

        if (x === tableTexte.length) {
            clearInterval(intunesec);
            //console.log("Point Final")
            var divprovisoirEx = document.querySelectorAll(".provisoirEx");
            var spaned = document.querySelectorAll(".fufuEx");
            for (i = 0; i < divprovisoirEx.length; i++) {
                spaned[i].remove();
                fini = divprovisoirEx[i].innerHTML;
                divprovisoirEx[i].outerHTML = fini;
            };
        }
    };
    intervalLettreEx();
}

function clickclear() {
    var divprovisoir = document.querySelectorAll(".provisoir");
    var spaned = texte.querySelectorAll(".fufu");
    clearInterval(intunesec);
    for (i = 0; i < divprovisoir.length; i++) {
        fini = divprovisoir[i].innerHTML + spaned[i].innerHTML;
        divprovisoir[i].outerHTML = fini;
        spaned[i].remove();
    };
}

document.querySelector("#exTipingMachin").addEventListener("click", machinetypingEx, { once: true });