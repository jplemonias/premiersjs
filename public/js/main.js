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
  }
  else {
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-home"></i>'
  }
};

function load() {
  if (window.innerWidth <= 666) {
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-long-arrow-alt-up"></i>'
    var width = "width: calc( " + document.querySelector('#littleBtn').clientWidth + "px + 22px );"
    document.querySelector('#little-menu').setAttribute('style', width)
    document.querySelector('#littleBtn').classList.add('displayN')
    document.querySelector('#littleBtn').classList.remove('hidden')
  }
  else {
    console.log(document.querySelector('#littleBtn').clientWidth)
    document.querySelector("#btntop").innerHTML = '<i class="fas fa-home"></i>'
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