// chiedere all'utente la sua mail e controllare che sia nella lista di chi può accedere





// dichiarare la lista di mail
const listMail = ['mariokart@prova.com', 'ciao72@prova.com', 'alessandro.fulco99@gmail.com', 'fede-fede@prova.com'];

const email = document.querySelector('input');
console.log(email);
const button = document.querySelector('button');
console.log(button);
let risposta = document.getElementById('answer');

button.addEventListener('click',
    function() {
        const myEmail = email.value;
        console.log('input', myEmail);
        let data = myEmail + ' non è presente nel database';
    
        for (let i = 0; i < listMail.length; i++) {
            if (listMail[i] === myEmail) {
                data = myEmail + ' presente nel database';
            }
        }
        risposta.innerHTML = ciao;
    }
);



//chiedere all'utente la sua mail 


// confrontare la mail con la lista



// stampare un messaggio che confermi o no la presenza della sua mail
