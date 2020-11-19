const pix = 133; //place de l'espoin
let observer = null
const spyes = document.querySelectorAll("[data-spy]")
/**
* @param {HTMLElement} elem
*/
/**
* @param {IntersectionObserverEntry[]} entries
* @param {IntersectionObserver} observer
*/
/**
* @param {NodeListOf.<Element} elems
*/
/****************************************************Start**/
/******** fonction liant l'element afiché et longlet lié ***/
const selected = function (elem) {
    const id = elem.getAttribute("id")
    const selectedelem = document.querySelectorAll(`a[href="#${id}"]`)
    if (selectedelem === null) {
        return null
    }
    for (let i = 0; i < selectedelem.length; i++) {
        selectedelem[i].parentElement
            .querySelectorAll(".select")
            .forEach(node => node.classList.remove("select"))
        selectedelem[i].classList.add("select")
    }
}
/******** fonction liant l'element afiché et longlet lié ***/
/****************************************************End****/
const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
            selected(entry.target)
        }
    })
}
/****************************************************Start**/
/*********************** fonction observant les elements ***/
const observe = function (elems) {
    if (observer !== null) {
        elems.forEach(elem => observer.unobserve(elem))
    }
    const y = window.innerHeight - pix
    observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    spyes.forEach(elem => observer.observe(elem))

}
/*********************** fonction observant les elements ***/
/****************************************************End****/
/****************************************************Start**/
/***************************** Listener resize => window ***/
if (spyes.length > 0) {
    observe(spyes)
    window.addEventListener('resize', function () {
        observe(spyes)
    })
}
/***************************** Listener resize => window ***/
/****************************************************End****/