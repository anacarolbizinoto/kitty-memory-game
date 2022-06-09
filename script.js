const tabuleiro = document.getElementById('tabuleiro')
const imagens = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
];

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
        <div class="cartao-memoria">
            <img class="cartao-frente" src="img/${img}">
            <img class="cartao-costas" src="img/card.png">
        </div>
    `
})

tabuleiro.innerHTML = cardHTML + cardHTML;
