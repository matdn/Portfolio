var burger = document.getElementById("burger")
var pres = document.getElementById("pres")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var portfolio = document.getElementById("portfolio")
var cross = document.getElementById("cross")
var about = document.getElementById("about")

burger.addEventListener('click',function(){
    span1.style.height = "100%"
    span2.style.height = "100%"
    span3.style.height = "100%"
    burger.style.visibility = "hidden"
    portfolio.style.bottom = "1000px"
    cross.style.visibility = "visible"
    about.style.visibility = "visible"
    about.style.transitionDelay = "1s"
})
cross.addEventListener('click',function(){
    span1.style.height = "0%"
    span2.style.height = "0%"
    span3.style.height = "0%"
    burger.style.visibility = "visible"
    portfolio.style.bottom = "230px"
    cross.style.visibility = "hidden"
    about.style.visibility = "hidden"
    about.style.transitionDelay = "0s"
})

