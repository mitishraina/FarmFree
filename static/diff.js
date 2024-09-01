const container = document.querySelector('.container');
const textElements = document.querySelectorAll('.text-section h1, .text-section h2, .text-section .cta');
const imageElement = document.querySelector('.image');

container.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const moveX = (x / window.innerWidth) * 20 - 10;
    const moveY = (y / window.innerHeight) * 20 - 10;

    textElements.forEach(el => {
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    imageElement.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
});