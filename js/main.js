const containerDom = document.getElementById('container');
const numeriContainer = document.getElementById('numeri');
const commentoDom = document.getElementById('commento');
setTimeout (hide, 9000);
setTimeout (promptDom, 10000);
let numeriArrayGenerati = [];
generaNumeri();
let numeriArrayPrompt = [];
let punteggio = 0;










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
    let i = 0;
    while (i < numeriArrayGenerati.length) {
        if (numeriArrayGenerati.includes(numeriArrayPrompt[i])) {
            punteggio ++;
            console.log(punteggio);
        }
        i++
    }
    aggiungiCommento();
}
function aggiungiCommento () {
    let commento = `il tuo punteggio è di ${punteggio} punti`
    commentoDom.innerHTML = commento;
}





