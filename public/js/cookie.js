(function () {
  var scookiebar = "position:fixed;bottom:0; left:0; width: 100%; text-align: center; padding: 12px 0; margin:0;  background: rgba(244, 244, 244, 0.9);  color: #919191;  font: 14px arial, sans-serif; height: max-content;",
    policyurl = "https://jplemonias.github.io/moi/bientot.html",
    divquinzep = "width:15%;",
    out = "position: fixed; left:0; right:0; top: 0; height: 0;",
    btn = "position: absolute; top:0px; line-height: 30px; padding: 0 8px; margin: 0; font-weight: 600;",
    btncolor = "color: #FFFFFF;background: #7CCBDE;",
    linkcolor = "color: #000000;font-weight:bold;",
    txt = "display: inline-block; width: 78%; margin:0; font-family: Arial;",
    hidden = "hidden",
    //hidden = "class= \"hidden\"",
    scheck = "position:fixed;bottom:4px;right:0;border-radius: 3px; line-height: 30px; padding: 0 6px;margin: 1px 8px 0 0;font-weight: 600;",
    pointeur = "cursor: pointer;",
    settingcook = "position:fixed; width:69%; background: rgba(244, 244, 244, 0.9); top: 15%;bottom: 15%; left: 15%; right: 15%; text-align: center;",
    horiz = "writing-mode: vertical-rl;",
    onglet = "border-radius: 20px 0 0 20px;",
    cuisinag = "border: solid 1px;margin:15px; border-radius: 0 10px 10px 0;overflow: auto;direction: rtl;";

  //document.write("<div id='out-click' style='"+out+"'></div>");
  //------------------------Click Out
  let newoutclick = document.createElement('div');
  newoutclick.setAttribute("id", "out-click");
  newoutclick.setAttribute("style", out);
  document.body.appendChild(newoutclick);


  //document.write("<div id='cookie-bar' " + hidden + " style='" + scookiebar + "'><div style='" + divquinzep + "'><span id='cook' style='" + btn + " " + btncolor + " " + pointeur + "left:0; border-radius: 0 0 6px 0;'>cuisiner</span></div><div style='" + divquinzep + "'><span id='refu' style='" + btn + " " + btncolor + " " + pointeur + "top:-30px; right:0px; border-radius: 6px 0 0;'>X</span><span id='agree' style='" + btn + " " + btncolor + " " + pointeur + "right:0; border-radius: 0 0 0 6px;'>ok</span></div><div id='clickhere' " + hidden + " style='position: absolute; width: max-content; left: 50%; top: 50%; transform: translate(-50%, -50%);'>Clique ICI</div><div id='txtbarcookie' style='" + txt + "'>Ce site web utilise une carte des cookie disponible <a id='cookies' href='fidel.html' style='" + linkcolor + "'>IcI </a>affin de vous offir une selection à votre gout ( au beur salé ou encore chocolat blanc ... ) <a id='cookie-policy' href='fidel.html' style='" + linkcolor + "'>Consulter notre politique des cookies</a>.</div></div>");
  //------------------------Cookie Bar
  let newcookiebar = document.createElement('div');
  newcookiebar.setAttribute("id", "cookie-bar");
  newcookiebar.setAttribute("style", scookiebar);
  newcookiebar.setAttribute("class", hidden);
  document.body.appendChild(newcookiebar);
  let newqprcUn = document.createElement('div');
  newqprcUn.setAttribute("style", divquinzep);
  let newqprcDeux = document.createElement('div');
  newqprcDeux.setAttribute("style", divquinzep);
  let cook = document.createElement('span');
  cook.setAttribute("id", "cook");
  cook.setAttribute("style", btn + btncolor + pointeur + "left:0; border-radius: 0 0 6px 0;");
  let agree = document.createElement('span');
  agree.setAttribute("id", "agree");
  agree.setAttribute("style", btn + btncolor + pointeur + "right:0; border-radius: 0 0 0 6px;");
  let refu = document.createElement('span');
  refu.setAttribute("id", "refu");
  refu.setAttribute("style", btn + btncolor + pointeur + "top:-30px; right:0px; border-radius: 6px 0 0;");
  newcookiebar.appendChild(newqprcUn);
  newcookiebar.appendChild(newqprcDeux);
  newqprcUn.appendChild(cook);
  newqprcDeux.appendChild(agree);
  newqprcDeux.appendChild(refu);
  document.querySelector("#cook").innerHTML = "Cuisiner" + "\n";
  document.querySelector("#agree").innerHTML = "Ok" + "\n";
  document.querySelector("#refu").innerHTML = "X" + "\n";
  //------------------------Clickhere
  let newclickhere = document.createElement('div');
  newclickhere.setAttribute("id", "clickhere");
  newclickhere.setAttribute("style", "position: absolute; width: max-content; left: 50%; top: 50%; transform: translate(-50%, -50%);");
  newclickhere.setAttribute("class", hidden);
  newcookiebar.appendChild(newclickhere);
  document.querySelector("#clickhere").innerHTML = "Clique ICI" + "\n";

  //------------------------Txt Bar Cookie
  let newtxtbarcookie = document.createElement('div');
  newtxtbarcookie.setAttribute("id", "txtbarcookie");
  newtxtbarcookie.setAttribute("style", txt);
  newcookiebar.appendChild(newtxtbarcookie);
  let aun = document.createElement('a');
  aun.setAttribute("id", "cookies");
  aun.setAttribute("href", policyurl)
  aun.setAttribute("style", linkcolor);
  let adeux = document.createElement('a');
  adeux.setAttribute("id", "cookie-policy");
  adeux.setAttribute("href", policyurl);
  adeux.setAttribute("style", linkcolor);
  newtxtbarcookie.append("Ce site web utilise une carte des cookie disponible ");
  newtxtbarcookie.appendChild(aun);
  newtxtbarcookie.append(" affin de vous offir une selection à votre gout ( au beur salé ou encore chocolat blanc ... ) ");
  newtxtbarcookie.appendChild(adeux);
  newtxtbarcookie.append(".\n");
  document.querySelector("#cookies").innerHTML = "IcI";
  document.querySelector("#cookie-policy").innerHTML = "Consulter notre politique des cookies";

  //document.write("<span id='checkcookies' " + hidden + " style='" + scheck + " " + btncolor + " " + pointeur + "'>cookies</span>");
  //------------------------Check Cookie
  let checkcookies = document.createElement('span');
  checkcookies.setAttribute("id", "checkcookies");
  checkcookies.setAttribute("class", hidden);
  checkcookies.setAttribute("style", scheck + btncolor + pointeur);
  document.body.appendChild(checkcookies);
  document.querySelector("#checkcookies").innerHTML = "Cookies" + "\n";

  //document.write("<div id='setting' " + hidden + " style='"+settingcook+"" + onglet + "'><div id='four'><span id='titreFour'>Cuisinez votre propre cookie</span><div id='contenu' style='" + cuisinag + "'><div id='ascroll'><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div><div id='selectCookie'>A<br>B<br>C</div></div></div></div><span id='refuSetting' style=' " + horiz + " " + btn + " " + btncolor + " " + pointeur + "" + onglet + "background-color:#fd0000;Top: 0;bottom:85%; right:0;'>X</span><span id='closeSetting' style=' " + horiz + " " + btn + " " + btncolor + " " + pointeur + "" + onglet + "background-color:#f1903d;Top: 15%;bottom:70%; right:0;'>close</span><span id='agreeSetting' style=' " + horiz + " " + btn + " " + btncolor + " " + pointeur + "" + onglet + "background-color:#7cdeb5;top: 30%;bottom: 0px; right:0;'>ok</span></div>");
  //------------------------Setting
  let setting = document.createElement('div');
  setting.setAttribute("id", "setting");
  setting.setAttribute("class", hidden);
  setting.setAttribute("style", settingcook + onglet);
  let four = document.createElement('div');
  four.setAttribute("id", "four")
  let titreFour = document.createElement('span');
  titreFour.setAttribute("id", "titreFour");
  let contenu = document.createElement('div');
  contenu.setAttribute("id", "contenu");
  contenu.setAttribute("style", cuisinag);
  let ascroll = document.createElement('div');
  ascroll.setAttribute("id", "ascroll");
  let refuSetting = document.createElement('span');
  refuSetting.setAttribute("id", "refuSetting");
  refuSetting.setAttribute("style", horiz + btn + btncolor + pointeur + onglet + "background-color:#fd0000;Top: 0;bottom:85%; right:0;");
  let closeSetting = document.createElement('span');
  closeSetting.setAttribute("id", "closeSetting");
  closeSetting.setAttribute("style", horiz + btn + btncolor + pointeur + onglet + "background-color:#f1903d;Top: 15%;bottom:70%; right:0;");
  let agreeSetting = document.createElement('span');
  agreeSetting.setAttribute("id", "agreeSetting");
  agreeSetting.setAttribute("style", horiz + btn + btncolor + pointeur + onglet + "background-color:#7cdeb5;top: 30%;bottom: 0px; right:0;");
  document.body.appendChild(setting);
  setting.appendChild(four);
  four.appendChild(titreFour);
  four.appendChild(contenu);
  contenu.appendChild(ascroll);
  setting.appendChild(refuSetting);
  setting.appendChild(closeSetting);
  setting.appendChild(agreeSetting);
  var i = 0;
  while (i <= 8) {
    let selectCookie = document.createElement('div');
    selectCookie.setAttribute("class", "selectCookie");
    ascroll.appendChild(selectCookie)
    var inselect = document.querySelectorAll(".selectCookie")
    inselect[i].innerHTML = "A<br>B<br>C";
    i++;
  }
  document.querySelector("#titreFour").innerHTML = "Cuisinez votre propre cookie" + "\n";
  document.querySelector("#refuSetting").innerHTML = "X" + "\n";
  document.querySelector("#closeSetting").innerHTML = "Close" + "\n";
  document.querySelector("#agreeSetting").innerHTML = "OK" + "\n";
})();

//window.onresize = resiezCookies
//window.onload = resiezCookies

const bar = document.querySelector("#cookie-bar");
const texte = document.querySelector("#txtbarcookie");
const longeurdebut = texte.innerHTML.length;
const modifcookie = document.querySelector("#checkcookies");
const ok = document.querySelector("#agree");
const refu = document.querySelector("#refu");
const cook = document.querySelector("#cook");
const setting = document.querySelector("#setting");
const outclick = document.querySelector("#out-click");
const four = document.querySelector("#four");
const titreFour = document.querySelector("#titreFour");
const fourContenu = document.querySelector("#contenu");
const lesCookies = document.querySelector("#ascroll");
const fourrefu = document.querySelector("#refuSetting");
const closeSetting = document.querySelector("#closeSetting");
const fouraccept = document.querySelector("#agreeSetting");
const click = document.querySelector("#clickhere");
var acceptok = getC("accept");
var lengthcookie = document.cookie.length;
var nom;
var body = document.querySelector("body");
refu.style.width = (ok.clientWidth - 8) + "px";
const cut = texte.innerHTML.split(/\<|\>/);
(function () {
  var liste = document.cookie.split(';');
  for (let i = 0; i < liste.length; i++) {
    var nom = liste[i].split('=');
  }
  let newdiv = document.createElement('div');
  let newspantitle = document.createElement('span');
  let newspantxt = document.createElement('span');
  newspantitle.textContent = nom[0];
  newspantxt.innerHTML = texte.innerHTML;
  newspantxt.setAttribute("style", "display: block; margin: 5px 0;");
  newspantitle.setAttribute("style", "display: block; margin: 5px 0;");
  lesCookies.appendChild(newdiv);
  newdiv.appendChild(newspantitle);
  newdiv.appendChild(newspantxt);
  var select = newspantxt.querySelectorAll('a')
  for (let i = 0; i < select.length; i++) {
    select[0].removeAttribute("id");
  }
}());
function machinetyping() {
  texte.classList.toggle("hidden");
  click.classList.toggle("hidden");
  var blabla = "";
  for (i = 0; i < cut.length; i++) {
    if (i % 2 == 0) {
      blabla = blabla + "<span class='hidden fufu'>" + cut[i] + "</span>";
    } else {
      blabla = blabla + "<" + cut[i] + ">";
    }
    texte.innerHTML = blabla;
  };

  const spaned = texte.querySelectorAll(".fufu");
  let tabletexte = new Array();
  for (i = 0; i < spaned.length; i++) {
    spaned[i].outerHTML = "<span class='provisoir'></span>" + spaned[i].outerHTML;

    tabletexte.push(spaned[i].innerHTML);
  };
  function changelettre() {
    intunesec = setInterval(lafonction, 666);
  };
  var x = 0;
  function lafonction() {
    var divprovisoir = document.querySelectorAll(".provisoir");
    var spanedf = texte.querySelectorAll(".fufu");
    var longueur = tabletexte[x].length;
    var splited = spanedf[x].innerHTML.split("");
    var lettre = splited.shift();
    var lettremoinsune = splited.join('');
    var plusune = divprovisoir[x].innerHTML + lettre;
    divprovisoir[x].innerHTML = plusune;
    spanedf[x].innerHTML = lettremoinsune;
    var un = new Audio('public/audio/Tun.mp3');
    var deux = new Audio('public/audio/Tdeux.mp3');
    var trois = new Audio('public/audio/Ttrois.mp3');
    var quatre = new Audio('public/audio/Tun.mp3');
    var quatre = new Audio('public/audio/Tquatre.mp3');
    var cinq = new Audio('public/audio/Tcinq.mp3');
    if (lettre === " ") {
      //console.log(" ");
      cinq.play();
    } else if (lettre === "(" || lettre === ")") {
      //console.log("( )");
      trois.play();
    } else if (lettre === ".") {
      //console.log(".");
      quatre.play();
    } else {
      //console.log(plusune + " |   | " + lettremoinsune)
      un.play();
    }
    if (divprovisoir[x].innerHTML.length == longueur) {
      x++;
    }

    if (x === tabletexte.length) {
      clearInterval(intunesec);
      //console.log("Point Final")
      var divprovisoir = document.querySelectorAll(".provisoir");
      var spaned = document.querySelectorAll(".fufu");
      for (i = 0; i < divprovisoir.length; i++) {
        spaned[i].remove();
        fini = divprovisoir[i].innerHTML;
        divprovisoir[i].outerHTML = fini;
      };
    }
  };
  changelettre();
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

function createC(nom, contenu, jours) {
  var e = null;
  var date = new Date();
  date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
  e = "; expires=" + date.toGMTString();
  document.cookie = nom + "=" + contenu + e + "; path=/";
  if (Math.sign(jours) == -1) {
    console.log("cookie \"" + nom + "\" supprime contenu : " + contenu + ", avec une date dexpiration au : " + date.toGMTString() + ".")
  } else {
    console.log("cookie \"" + nom + "\" cree contenu : " + contenu + ", avec une date dexpiration au : " + date.toGMTString() + ".")
  }
};

function getC(nom) {
  nomo = nom + "=";
  var liste = document.cookie.split(';');
  for (var i = 0; i < liste.length; i++) {
    var c = liste[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nomo) == 0) return c.substring(nomo.length, c.length)
  }
  console.log("pas de cookie sous le nom \"" + nom + "\" désolé.");
  return null;
};

(function () {
  if (acceptok == "Yes") {
    modifcookie.classList.toggle("hidden")
  }
})();

(function () {
  if (lengthcookie === 0 || acceptok == null) {
    bar.classList.toggle("hidden");
    console.log("pas de cookie ou refus")
  }
})();

function acceptation() {
  var acceptok = getC("accept");
  var nom = "accept"
  var contenu = "Yes"
  var jours = 10
  if (longeurdebut < texte.innerHTML.length) {
    clickclear();
    texte.classList.toggle("hidden");
    click.classList.toggle("hidden");
  }
  if (acceptok == "Yes") {
    texte.classList.toggle("hidden");
    click.classList.toggle("hidden");
    createC(nom, contenu, jours);
    outclick.removeEventListener("click", outclickI, { once: true });
    bar.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
    console.log("reacceptetion")
  } if (acceptok != "Yes") {
    createC(nom, contenu, jours);
    bar.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
    console.log("cookies acceptes")
  }
  if (setting.classList == "") {
    setting.classList.toggle("hidden");
    console.log("parametres cookie etait ouvert")
  }
};

ok.addEventListener("click", acceptation);
fouraccept.addEventListener("click", acceptation);

function refuf(stop) {
  var nom = "accept";
  var contenu = "No";
  var jours = -1;
  var texte = document.querySelector("#txtbarcookie");
  if (longeurdebut < texte.innerHTML.length) {
    clickclear();
  }
  createC(nom, contenu, jours);
  if (acceptok == null) {
    bar.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
    console.log("cookies vides")
  };
  if (setting.classList == "") {
    setting.classList.toggle("hidden");
    console.log("parametres cookie etait ouvert")
  };
  if (click.classList == "") {
    texte.classList.toggle("hidden");
    click.classList.toggle("hidden");
  }
  outclick.removeEventListener("click", outclickI, { once: true });
  console.log("cookies reffuses");
  click.removeEventListener('click', machinetyping, { once: true })
  stop.stopPropagation();
};

refu.addEventListener("click", refuf);
fourrefu.addEventListener("click", refuf);

function outclickI() {
  console.log("out-click")
  if (setting.classList == "") {
    setting.classList.toggle("hidden");
    console.log("parametres cookie etait ouvert")
  };
  texte.classList.toggle("hidden");
  click.classList.toggle("hidden");
  bar.classList.toggle("hidden");
  modifcookie.classList.toggle("hidden");
  outclick.style.height = 0 + "px";
  console.log("fermeture cookies deja accepte")
};
function outclickII() {
  bar.classList.toggle("hidden");
  modifcookie.classList.toggle("hidden");
  outclick.style.height = 0 + "px";
  console.log("fermeture")
}

modifcookie.addEventListener("click", function (stop) {
  click.addEventListener('click', machinetyping, { once: true })
  var acceptok = getC("accept");
  if (acceptok == "Yes") {
    texte.classList.toggle("hidden");
    click.classList.toggle("hidden");


    console.log("barcookie ouverte");
    if (bar.classList.value === "hidden" && acceptok === "Yes") {
      outclick.style.height = (body.clientHeight - bar.offsetHeight) + "px";
      outclick.addEventListener("click", outclickI, { once: true })
      console.log("barcookie ouverte et accepte clique \"out-clic\" OK");
    } else {
      outclick.addEventListener("click", outclickII, { once: true })

    }
    bar.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
    stop.stopPropagation();
  } else {
    bar.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
  }
});
function closeSettingf() {
  four.style.height = "100%";
  fourContenu.scrollHeight - lesCookies.scrollTop === fourContenu.clientHeight;
  if (acceptok == null) {
    setting.classList.toggle("hidden");
    console.log("cuisine à cookie non accepte");
  } else if (acceptok == "Yes" && bar.classList.value === "") {
    setting.classList.toggle("hidden");
    console.log("cuisine à cookie accepte");
  }
  else {
    setting.classList.toggle("hidden");
    modifcookie.classList.toggle("hidden");
    console.log("cuisine à cookie deja accepte");
  }
}
cook.addEventListener("click", closeSettingf);
closeSetting.addEventListener("click", closeSettingf);

/*
function resiezCookies() {
  four.style.width = (setting.clientWidth - fourrefu.clientWidth) + "px";
  contenu.style.height = (setting.clientHeight - titreFour.offsetHeight - contenu.style.marginTop.match(/\d+/g).join('') * 2 - 2) + "px";
  if (window.innerWidth <= 666) {
    cook.innerHTML = "&#127850;"
  }
  else {
    cook.innerHTML = "cuisiner"
  };
  if (bar.clientHeight < 41) {
    ok.style.top = "5px";
    cook.style.top = "5px";
  }
  else {
    ok.style.top = "0px";
    cook.style.top = "0px";
  }
}
*/
var test = navigator.userAgent.split(/\(|\)/)
var longueurtt = test.length - 1;
for (let i = 0; i < test.length; i++) {
  var splted = test;
  if (splted.length === 3 && i === longueurtt) {
    var splted = test[i].split(" ");
    var browser = splted[i].split(/\ /)
    if (browser.length == 1) {
      var fin = browser[0].split(/\//)
      console.log("Tu utilise " + fin[0] + " version " + fin[1])
    }
  } else if (splted.length === 5 && i === longueurtt) {
    var splted = test[i].split(" ");
    if (splted.length === i) {
      var browser = splted[3].split(/\//);
      console.log("Tu utilise " + browser[0] + " version " + browser[1])
    }
    if (splted.length === i - 1) {
      var browser = splted[1].split(/\//);
      if (browser[0] == "Chrome")
        console.log("Tu utilise " + browser[0] + " version " + browser[1])
    } else {
      console.log("Tu utilise Brave" + " version " + browser[1])
    }
  }
}
