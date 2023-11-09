const foreground = document.querySelector('.parallax-foreground');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    foreground.style.transform = `translateY(-${scrollValue * 0.4}px)`; // Ajusta la velocidad del parallax cambiando el valor 0.4
});