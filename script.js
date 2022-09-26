var click = document.getElementById("click_div")
var pres = document.getElementById("pres")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var portfolio = document.getElementById("portfolio")
var cross = document.getElementById("cross")
var about = document.getElementById("about")
var social_networks = document.getElementById("social_networks")
var li1 = document.getElementById("li1")
var li2 = document.getElementById("li2")
var li3 = document.getElementById("li3")
var li4 = document.getElementById("li4")
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")

click.addEventListener('click',function(){
    span1.style.height = "100%"
    span2.style.height = "100%"
    span3.style.height = "100%"
    about.style.visibility = "visible"
    portfolio.style.transform = "translateX(1000px)"
    social_networks.style.transform = "translateX(-1000px)"
    cross.style.visibility = "visible"
    about.style.transitionDelay = "1.2s"
})
cross.addEventListener('click',function(){
    span1.style.height = "0%"
    span2.style.height = "0%"
    span3.style.height = "0%"
    about.style.visibility = "hidden"
    portfolio.style.transform = "translateX(0px)"
    social_networks.style.transform = "translateX(0px)"
    cross.style.visibility = "hidden"
    about.style.transitionDelay = "0s"
})
console.log('yay')

li1.addEventListener('mouseover', function(){
    console.log('oui')
    img1.classList.add("block");
   
})
