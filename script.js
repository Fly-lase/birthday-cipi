/* MUSIC */

window.addEventListener("load",function(){

const music=document.getElementById("music")

music.play().catch(()=>{

document.addEventListener("click",()=>{
music.play()
},{once:true})

})

})



/* COUNTDOWN */

let num=3

let timer=setInterval(function(){

document.getElementById("count").innerText=num

num--

if(num<0){

clearInterval(timer)

document.getElementById("countPage").style.display="none"

showText()

}

},1000)



/* TEXT */

function showText(){

let text=document.getElementById("birthdayText")
let page=document.getElementById("textPage")
let cartoon=document.getElementById("cartoon")

page.style.display="flex"

text.innerText="Happy Birthday"

setTimeout(()=>{
text.innerText="Cipi ❤️"
},2000)

setTimeout(()=>{
cartoon.classList.remove("hidden")
},3500)

setTimeout(()=>{
page.style.display="none"
document.getElementById("bookPage").style.display="block"
},6000)

}



/* BOOK */

let pages=document.querySelectorAll(".page")
let current=0

document.addEventListener("click",function(){

if(current<pages.length-1){

pages[current].classList.remove("active")
current++

pages[current].classList.add("active")

}else{

document.getElementById("bookPage").style.display="none"
document.getElementById("finalPage").style.display="block"

}

})



/* LOVE JATUH */

setInterval(function(){

const love=document.createElement("div")

love.classList.add("love")

love.innerText="❤"

love.style.left=Math.random()*100+"vw"

love.style.animationDuration=Math.random()*3+2+"s"

document.body.appendChild(love)

setTimeout(()=>{
love.remove()
},5000)

},300)



/* SPARKLES */

for(let i=0;i<50;i++){

let sparkle=document.createElement("div")

sparkle.classList.add("sparkle")

sparkle.style.left=Math.random()*100+"vw"

sparkle.style.top=Math.random()*100+"vh"

sparkle.style.animationDelay=Math.random()*2+"s"

document.body.appendChild(sparkle)

}