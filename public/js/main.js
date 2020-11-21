window.onresize = resiez
window.onload = load

function resiez() {
  if (window.innerWidth <= 666) {
    document.querySelector('#littleBtn').classList.add('hidden')
    document.querySelector('#littleBtn').classList.remove('displayN')
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-long-arrow-alt-up"></i>'
    var width = "width: " + document.querySelector('#littleBtn').clientWidth + "px;"
    document.querySelector('#little-menu').setAttribute('style', width)
    document.querySelector('#littleBtn').classList.remove('hidden')
    document.querySelector('#littleBtn').classList.add('displayN')
    cook.innerHTML = "&#127850;"
  }
  else {
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-home"></i>'
    cook.innerHTML = "cuisiner"
  }
  if (bar.clientHeight < 41) {
    ok.style.top = "5px";
    cook.style.top = "5px";
  }
  else {
    ok.style.top = "0px";
    cook.style.top = "0px";
  }
};

function load() {
  if (window.innerWidth <= 666) {
    four.style.width = (setting.clientWidth - fourrefu.clientWidth) + "px";
    contenu.style.height = (setting.clientHeight - titreFour.offsetHeight - contenu.style.marginTop.match(/\d+/g).join('') * 2 - 2) + "px";
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-long-arrow-alt-up"></i>'
    var width = "width: calc( " + document.querySelector('#littleBtn').clientWidth + "px + 22px );"
    document.querySelector('#little-menu').setAttribute('style', width)
    document.querySelector('#littleBtn').classList.add('displayN')
    document.querySelector('#littleBtn').classList.remove('hidden')
    cook.innerHTML = "&#127850;"
  }
  else {
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-home"></i>'
    cook.innerHTML = "cuisiner"
  }
  if (bar.clientHeight < 41) {
    ok.style.top = "5px";
    cook.style.top = "5px";
  }
  else {
    ok.style.top = "0px";
    cook.style.top = "0px";
  }
};

function hr() {
  document.querySelector("#deux").classList.toggle("hidden")
};

function littleMenu() {
  var x = document.getElementById("littleBtn");
  if (x.className.indexOf("displayN") == -1) {
    x.className += " displayN";
  } else {
    x.className = x.className.replace(" displayN", "");
  }
};

function littleMenuClose() {
  var x = document.getElementById("littleBtn");
  if (x.className.indexOf("displayN") == -1) {
    x.className += " displayN";
  } else {
    x.className = x.className.replace(" displayN", "");
  }
};