var burger = document.getElementById("burger")
var pres = document.getElementById("pres")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var matis = document.getElementById("matis")
var portfolio = document.getElementById("portfolio")
var cross = document.getElementById("cross")


burger.addEventListener('click',function(){
    span1.style.height = "100%"
    span2.style.height = "100%"
    span3.style.height = "100%"
    burger.style.visibility = "hidden"
    matis.style.bottom = "800px"
    portfolio.style.bottom = "1000px"
    cross.style.visibility = "visible"
})
cross.addEventListener('click',function(){
    span1.style.height = "0%"
    span2.style.height = "0%"
    span3.style.height = "0%"
    burger.style.visibility = "visible"
    matis.style.bottom = "60px"
    portfolio.style.bottom = "210px"
    cross.style.visibility = "hidden"
})

