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
        <div class="carta-memoria" data-carta="${img}">
            <img class="carta-frente" src="img/${img}">
            <img class="carta-costas" src="img/carta.png">
        </div>
    `
});

tabuleiro.innerHTML = cartaHTML + cartaHTML;

const cartas = document.querySelectorAll(".carta-memoria"); 
let primeiraCarta, segundaCarta;
let trancarCarta = false;

function flipCarta() {
    if(trancarCarta) return false;
    this.classList.add('flip');

    if (!primeiraCarta) {
        primeiraCarta = this;

        return false;
    }

    segundaCarta = this;

    checandoIgualdade();
} 

function checandoIgualdade () {
    let compativel = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;

    !compativel ? desativarCartas(): true;
} 

function desativarCartas () {
    trancarCarta = true;
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip')}, 

        [primeiraCarta, segundaCarta, trancarCarta] = [null, null, false]
        1000)
    
}





cartas.forEach(carta => carta.addEventListener('click', flipCarta))



