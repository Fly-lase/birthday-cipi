/* BOOK SWIPE */

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
