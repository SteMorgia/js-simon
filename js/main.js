const containerDom = document.getElementById('container');
const numeriContainer = document.getElementById('numeri');
setTimeout (hide, 30000);



for (let i = 0; i < 5; i++) {
    let numeriArray = [];
    let numeri = numeriCasuali (50);
    console.log(numeri);
    numeriArray.push(numeri);
    console.log (numeriArray);
    numeriContainer.innerText = numeriArray;
}





function hide () {
    containerDom.classList.add('d-none');
}

function numeriCasuali (max) {
    return Math.floor(Math.random() * max);
}




