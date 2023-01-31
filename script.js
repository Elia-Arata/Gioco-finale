const nomeUtente = window.prompt('Come ti chiami?');
let numeroCasuale = parseInt(Math.random() * 100 + 1);
let numeroUtente = document.querySelector('.inputUtente');
let tentativi = 10;
let titolo = document.querySelector('.titolo');
let stato = document.querySelector('.stato');
let gioca = document.querySelector('.gioca');
let risposta = document.querySelector('.risposta');
let elenco = [];


document.getElementById('paragrafo').innerHTML =  "Benvenuto " + nomeUtente + ". <br> Ho pensato un numero da 1 a 100. Hai 10 tentativi per indovinarlo. Dopo ogni tentativo saprai se il numero che hai inserito è maggiore o minore di quello che ho pensato io.";

function festeggia() {
    titolo.innerHTML = "CONGRATULAZIONI, HAI VINTO";
    stato.style.display = 'none';
    gioca.style.display = 'none';
    numeroUtente.style.display = 'none';
    risposta.style.display = 'none';
    titolo.style.fontSize = '99px';
    document.body.style.background = '#541CBD';
    titolo.style.color = 'white';
    document.querySelector('h4').style.display = 'none';
    titolo.style.marginTop = '100px';


}
function perdi() {
    titolo.innerHTML = "MI DISPIACE HAI PERSO";
    stato.style.display = 'none';
    gioca.style.display = 'none';
    numeroUtente.style.display = 'none';
    risposta.style.display = 'none';
    document.querySelector('h4').style.display = 'none';
    document.body.style.background = 'red';
    titolo.style.color = 'white';
    titolo.style.fontSize = '99px';
    titolo.style.marginTop = '100px';


}


gioca.addEventListener('click', function () {
    tentativi--;
    elenco.push(numeroUtente.value);
    document.querySelector('h4').innerHTML = "NUMERI INSERITI: " + elenco;
    
    
    if (numeroUtente.value > 100 || numeroUtente.value < 1) {
        risposta.innerHTML = "ATTENZIONE, inserisci un numero da 1 a 100. Ti restano " + tentativi + " tentativi";
    }
    else if (numeroUtente.value == numeroCasuale) {
        festeggia();
        
        //break;
    }
    else if (tentativi == 0) {
        perdi();
        //break;
    }
    
    
    else if (tentativi == 1 && numeroUtente.value < numeroCasuale) {
        risposta.innerHTML = numeroUtente.value + " è troppo basso. Ti resta l'ultimo tentativo. ";
    }
    
    else if (tentativi == 1 && numeroUtente.value > numeroCasuale) {
        risposta.innerHTML = numeroUtente.value + " è troppo alto. Ti resta l'ultimo tentativo. ";
    }
    else if (numeroUtente.value < numeroCasuale) {
        risposta.innerHTML = numeroUtente.value + " è troppo basso. Ti restano " + tentativi + " tentativi";
    }
    else {
        risposta.innerHTML = numeroUtente.value + " è troppo alto. Ti restano " + tentativi + " tentativi";
    }
    
    numeroUtente.value = "";
});
//}

