const containerDom = document.getElementById('container');
const numeriContainer = document.getElementById('numeri');
setTimeout (hide, 3000);
setTimeout (promptDom, 4000);
let numeriArrayGenerati = [];
generaNumeri();
let numeriArrayPrompt = [];









console.log(numeriArrayPrompt);






function generaNumeri () {
    while (numeriArrayGenerati.length < 5) {
        let numero = numeriCasuali (99);
        console.log(numero);
        if (!numeriArrayGenerati.includes(numero)) {
            numeriArrayGenerati.push(numero);
        }
        console.log (numeriArrayGenerati);
    }
    numeriContainer.innerText = numeriArrayGenerati;
}

function numeriCasuali (max) {
    return Math.floor(Math.random() * max);
}

function hide () {
    containerDom.classList.add('d-none');
}
function promptDom () {
    for (let i = 0; i < 5; i++) {
        let valoreInserito = parseInt(prompt('insertisci un numero'));
        numeriArrayPrompt.push(valoreInserito);
    }
}




