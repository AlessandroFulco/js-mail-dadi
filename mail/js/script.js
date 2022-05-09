// chiedere all'utente la sua mail e controllare che sia nella lista di chi può accedere





// dichiarare la lista di mail
const listMail = ['mariokart@prova.com', 'ciao72@prova.com', 'alessandro.fulco99@gmail.com', 'fede-fede@prova.com'];

//chiedere all'utente la sua mail 


// confrontare la mail con la lista

myButton = document.querySelector('button');

myButton.addEventListener('click',
    function() {
        let myEmail = document.querySelector('input').value;
        console.log('input', myEmail);
        let myOutput = document.getElementById('answer');

        for (let i = 0; i < listMail.length; i++) {
            console.log(listMail[i]);
            if (listMail[i] === myEmail) {
                myOutput = myEmail + ' è presente nel database';
                console.log(myOutput);
            } else {
                myOutput = 'non è presente devi registrarti';
            }
            console.log(myOutput);
        
        }
    }
);

// stampare un messaggio che confermi o no la presenza della sua mail
