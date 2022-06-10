const tabuleiro = document.querySelector("#tabuleiro");
const img = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png'
];

let cartaHTML = '';

img.forEach(img => {
    cartaHTML += `
        <div class="carta-memoria">
            <img class="carta-frente" src="img/${img}">
            <img class="carta-costas" src="img/carta.png">
        </div>
    `
});

tabuleiro.innerHTML = cartaHTML + cartaHTML;

const cartas = document.querySelectorAll(".carta-memoria"); 

function flipCarta() {
    this.classList.add('flip');
} 

cartas.forEach(carta => carta.addEventListener('click', flipCarta))



