const tabuleiro = document.getElementById('tabuleiro')
const imagens = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
];

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
        <div>
            <img src="img/${img}">
            <img src="img/card.jpg">
        </div>
    `
})

tabuleiro.innerHTML = cardHTML;