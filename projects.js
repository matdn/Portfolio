var li1 = document.getElementById("li1")
var img1 = document.getElementById("img1")
var li2 = document.getElementById("li2")
var img2 = document.getElementById("img2")
var li3 = document.getElementById("li3")
var img3 = document.getElementById("img3")
var li4 = document.getElementById("li4")
var img4 = document.getElementById("img4")
var images = document.querySelectorAll("img")

li1.addEventListener('mouseover', function(){
    img1.style.opacity = "100%"
    console.log("ayo")
})
li1.addEventListener('mouseout', function(){
    img1.style.opacity = "0%"
    console.log("ayo")
})
li2.addEventListener('mouseover', function(){
    img2.style.opacity = "100%"
    console.log("ayo")
})
li2.addEventListener('mouseout', function(){
    img2.style.opacity = "0%"
    console.log("ayo")
})
li3.addEventListener('mouseover', function(){
    img3.style.opacity = "100%"
    console.log("ayo")
})
li3.addEventListener('mouseout', function(){
    img3.style.opacity = "0%"
    console.log("ayo")
})
li4.addEventListener('mouseover', function(){
    img4.style.opacity = "100%"
    console.log("ayo")
})
li4.addEventListener('mouseout', function(){
    img4.style.opacity = "0%"
    console.log("ayo")
})