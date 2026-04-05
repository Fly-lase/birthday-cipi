let count=3

const countText=document.getElementById("count")

const interval=setInterval(()=>{

count--

if(count===0){

clearInterval(interval)

document.getElementById("countPage").style.display="none"

showText()

}

countText.innerText=count

},1000)



function showText(){

const page=document.getElementById("textPage")

page.classList.remove("hidden")

setTimeout(()=>{

document.getElementById("cipiText").classList.remove("hidden")

},2000)

setTimeout(()=>{

document.getElementById("cartoon").classList.remove("hidden")

},4000)

setTimeout(()=>{

page.style.display="none"

document.getElementById("bookPage").classList.remove("hidden")

},7000)

}



/* CONFETTI */

function launchConfetti(){

for(let i=0;i<80;i++){

const confetti=document.createElement("div")

confetti.classList.add("confetti-piece")

confetti.style.left=Math.random()*100+"vw"

confetti.style.background=`hsl(${Math.random()*360},100%,50%)`

document.getElementById("confetti").appendChild(confetti)

setTimeout(()=>{

confetti.remove()

},3000)

}

}


/* DETECT LAST PAGE */

const c2=document.getElementById("c2")

c2.addEventListener("change",()=>{

if(c2.checked){

setTimeout(()=>{

launchConfetti()

},600)

}

})
