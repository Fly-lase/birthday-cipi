// Confetti
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    const colors = ['#ff0', '#ff1493', '#00ffff', '#00ff00', '#ff6600', '#fff', '#ff69b4'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);

        const fallDuration = Math.random() * 3 + 2; // 2-5 detik
        confetti.animate([
            { transform: `translateY(0px) rotate(0deg)` },
            { transform: `translateY(100vh) rotate(${Math.random()*720}deg)` }
        ], {
            duration: fallDuration * 1000,
            iterations: 1,
            easing: 'linear'
        });

        setTimeout(() => confetti.remove(), fallDuration * 1000);
    }

    // Hapus container setelah semua confetti hilang
    setTimeout(() => confettiContainer.remove(), 6000);
}

// Panggil confetti bersamaan dengan fireworks
function showCelebration() {
    bookSection.style.display = 'none';
    celebrationSection.style.display = 'flex';
    createFireworks();
    createConfetti();
}
