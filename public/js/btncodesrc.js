let sourceCode = document.createElement('div');
sourceCode.setAttribute("id", "source-code");
let txt = document.createElement('pre');
txt.setAttribute("class", "prettyprint");
let closecode = document.createElement('a');
closecode.setAttribute("id", "x");
closecode.textContent = "X";
document.body.appendChild(sourceCode);
sourceCode.appendChild(closecode);
sourceCode.appendChild(txt);
let clicSC = document.querySelector("#clicksSourceCode");
let cookiebar = document.querySelector("#cookie-bar");

function coloriage() {
    let head = document.querySelector("head");
    let body = document.querySelector("body");
    var headS = head.outerHTML.split(/\>/)
    let pre = document.querySelector('.prettyprint')
    for (let i = 0; i < headS.length - 1; i++) {
        const alphaB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const regex00 = new RegExp("title");
        const regex01 = new RegExp("meta");
        const regex02 = new RegExp("link");
        const regex03 = new RegExp("script");
        const regex04 = new RegExp("style");
        const regex05 = new RegExp("href");
        const regex1 = new RegExp("\/\*\!");
        const tab = "\t"
        if (i === 1) {
            var dcT = document.createElement("span")
            dcT.setAttribute("id", "docT")
            dcT.innerHTML = "&lt;!doctype html&gt;\n";
            pre.appendChild(dcT)
            var htmlCode = document.createElement("span")
            htmlCode.setAttribute("id", "htmlCode")
            htmlCode.innerHTML = "&lt;" + document.querySelector("html").outerHTML.split(">")[0].split("<")[1] + "&gt;\n";
            pre.appendChild(htmlCode)
            var headCode = document.createElement("span")
            headCode.setAttribute("id", "headCode")
            headCode.innerHTML = "&lt;head&gt;\n";
            pre.appendChild(headCode)
        }
        if (i === headS.length - 2) {
            var headCodeClose = document.createElement("span")
            headCodeClose.setAttribute("id", "headCodeClose")
            headCodeClose.innerHTML = "&lt;/head&gt;\n";
            pre.appendChild(headCodeClose)
        }
        if (regex00.test(headS[i]) == true) {
            var regexp = headS[i].split("").shift();
            var matches_array = alphaB.match(regexp);
            if (matches_array == regexp) {
                var cont = document.createElement("span")
                cont.setAttribute("class", "cont")
                cont.innerHTML = "\" " + headS[i].split("<")[0] + " \""
                pre.appendChild(cont)
                var pro = document.createElement("span")
                pro.setAttribute("class", "ele")
                pro.innerHTML = "&lt;" + headS[i].split("<")[1] + "&gt;\n"
                pre.appendChild(pro)
            } else {
                var pro = document.createElement("span")
                pro.setAttribute("class", "ele")
                pro.innerHTML = tab + "&lt;" + headS[i].split("<")[1] + "&gt;"
                pre.appendChild(pro)
            }
        } else if (regex01.test(headS[i]) == true) {
            var pro = document.createElement("span")
            pro.setAttribute("class", "ele")
            pro.innerHTML = tab + "&lt;" + headS[i].split("<")[1] + "&gt;" + "\n"
            pre.appendChild(pro)
        } else if (regex02.test(headS[i]) == true && regex05.test(headS[i]) == true) {
            var pro = document.createElement("span")
            pro.setAttribute("class", "ele")
            pro.innerHTML = tab + "&lt;" + headS[i].split("<")[1] + "&gt;" + "\n"
            pre.appendChild(pro)
        } else if (regex03.test(headS[i]) == true) {
            if (headS[i].split("<")[1].split("").shift() == "/") {
                if (regex04.test(headS[i]) == true) {
                } else {
                    var pro = document.createElement("span")
                    pro.setAttribute("class", "ele")
                    pro.innerHTML = "&lt;" + headS[i].split("<")[1] + "&gt;\n"
                    pre.appendChild(pro)
                }
            } else {
                var pro = document.createElement("span")
                pro.setAttribute("class", "ele")
                pro.innerHTML = tab + "&lt;" + headS[i].split("<")[1] + "&gt;"
                pre.appendChild(pro)
            }
        } else if (regex04.test(headS[i]) == true) {
            if (regex1.test(headS[i]) != true) {
                var regexp = headS[i].split("<")[1].split("").shift();
                var matches_array = alphaB.match(regexp);
                if (regexp != "/") {
                    var pro = document.createElement("span")
                    pro.setAttribute("class", "ele")
                    pro.innerHTML = tab + "&lt;" + headS[i].split("<")[1] + "&gt;"
                    pre.appendChild(pro)
                } else {
                    var scr = headS[i].split("\n")
                    for (let i = 1; i < scr.length; i++) {
                        if (i === 1) {
                            scr[i] = tab + tab + scr[i].trim() + "\n"

                            var cont = document.createElement("span")
                            cont.setAttribute("class", "stl")
                            cont.innerHTML = "\n" + scr[i]
                            pre.appendChild(cont)
                        } else if (i === scr.length - 1) {
                            scr[i] = tab + scr[i].trim() + "\n"

                            var cont = document.createElement("span")
                            cont.setAttribute("class", "stl")
                            cont.innerHTML = scr[i]
                            pre.appendChild(cont)
                        } else {
                            var cont = document.createElement("span")
                            cont.setAttribute("class", "stl")
                            cont.innerHTML = tab + tab + scr[i].trim() + "\n"
                            pre.appendChild(cont)
                        }
                    }
                    var pro = document.createElement("span")
                    pro.setAttribute("class", "ele")
                    pro.innerHTML = "&lt;" + headS[i].split("<")[1] + "&gt;\n"
                    pre.appendChild(pro)
                }
            } else if (regex04.test(headS[i]) == true && regex05.test(headS[i]) == true) {
                if (regex1.test(headS[i]) == true) {
                }
            } else if (regex1.test(headS[i]) == true) {
                var ext = document.createElement("span")
                ext.setAttribute("class", "imp")
                ext.innerHTML = "/*!"
                pre.appendChild(ext)
                var pro = document.createElement("span")
                pro.setAttribute("class", "ele")
                pro.innerHTML = "&lt;/span&gt;"
                pre.appendChild(pro)
                var ext2 = document.createElement("span")
                ext2.setAttribute("class", "imp")
                ext2.innerHTML = "&lt;-- stylesheet imporded --&gt;\n"
                pre.appendChild(ext2)
            }
        }
    }
    (function () {
        var pre = document.querySelector(".prettyprint")
        var body = document.querySelector("body")
        var selectAll = body.querySelectorAll("*")
        for (let i = 0; i < selectAll.length; i++) {
            if (i === 0) {
                var bodyCode = document.createElement("span")
                bodyCode.setAttribute("id", "htmlCodeClose")
                bodyCode.innerHTML = "&lt;/body&gt;\n";
                pre.appendChild(bodyCode)
            }
            if (selectAll[i].attributes.length > 0) {
                if (selectAll[i].attributes[0].value == "source-code") {
                    var htmlCodeClose = document.createElement("span")
                    htmlCodeClose.setAttribute("id", "htmlCodeClose")
                    htmlCodeClose.innerHTML = "&lt;/body&gt;\n";
                    pre.appendChild(htmlCodeClose)
                    var bodyCodeClose = document.createElement("span")
                    bodyCodeClose.setAttribute("id", "htmlCodeClose")
                    bodyCodeClose.innerHTML = "&lt;/html&gt;\n";
                    pre.appendChild(bodyCodeClose)
                    i = selectAll.length
                }
            }
        }
    })();
    sourceCode.style.display = "block"
}

clicSC.addEventListener("click", coloriage);


closecode.addEventListener("click", suppColoriage);
function suppColoriage() {
    txt.innerHTML = "";
    sourceCode.removeAttribute("style")
}