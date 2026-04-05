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


setInterval(()=>{

const love=document.createElement("div")

love.classList.add("love")

love.innerHTML="❤"

love.style.left=Math.random()*100+"vw"

love.style.animationDuration=(Math.random()*3+2)+"s"

document.body.appendChild(love)

setTimeout(()=>{

love.remove()

},5000)

},300)



let startX=0
let endX=0

const book=document.getElementById("book")

const pages=document.querySelectorAll(".page")

let currentPage=0

book.addEventListener("touchstart",(e)=>{
startX=e.changedTouches[0].screenX
})

book.addEventListener("touchend",(e)=>{

endX=e.changedTouches[0].screenX

if(startX-endX>50){

nextPage()

}

})

function nextPage(){

if(currentPage<pages.length-1){

pages[currentPage].classList.remove("active")

currentPage++

pages[currentPage].classList.add("active")

}

}
