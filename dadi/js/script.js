//creare un numero random da uno a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.





// creare un numero random per il computer
const numComputer = document.getElementById('computer');
const randomPc = Math.floor(Math.random() * 6) + 1;
numComputer.innerHTML = randomPc;

// creare un numero random per il giocatore
const numPlayer = document.getElementById('player');
const randomMe = Math.floor(Math.random() * 6) + 1;
numPlayer.innerHTML = randomMe;

// confrontare i due numeri e stabilire il più grande
let result;
if (randomPc > randomMe) {
    result = randomPc + ' Ha vinto il Computer';
} else if (randomMe === randomPc) {
    result =  ' Pareggio';
} else {
    result = randomMe + ' Congratulazioni hai vinto';
}

// stampare il vincitore
const myOutput = document.getElementById('risultato');
myOutput.innerHTML = 'Il numero più alto è: ' + result;
