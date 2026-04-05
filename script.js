// Element references
const cover = document.getElementById('cover');
const bookContainer = document.getElementById('bookContainer');
const book = document.getElementById('book');
const pages = document.querySelectorAll('.page');
const music = document.getElementById('bgMusic');

let currentPage = 0;

// Tampilkan buku setelah 3 detik
setTimeout(() => {
  cover.style.display = 'none';
  bookContainer.style.display = 'block';
}, 3000);

// Event klik buku untuk flip halaman
book.addEventListener('click', () => {
  if(currentPage < pages.length - 1){
    book.style.transform = `rotateY(${180 * (currentPage + 1)}deg)`;
    currentPage++;

    // Halaman terakhir: confetti muncul
    if(currentPage === pages.length - 1){
      createConfetti(100);
    }
  }
});

// Fungsi buat confetti
function createConfetti(num){
  for(let i=0; i<num; i++){
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.animationDuration = (2 + Math.random()*3) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
