//Check link
console.log('JS OK')

// 1.preparazione dati
    //1.recupero l'elemento dal Dom
    const fullNameField = document.getElementById('fullname');
    console.log('fullnamefueld', fullNameField);

    const kmField = document.getElementById('km');
    console.log('kmfiel', kmField);

    const ageField = document.getElementById('age');
    console.log('agefield', ageField);

    const sendButton = document.getElementById('send-btn');

    const cancelButton = document.getElementById('cancel-btn');

    const form = document.querySelector('form');
    console.log('form', form)
   /* const resultPrice = document.getElementById('price');
    console.log('id', resultPrice);
    const resultDiscount = document.getElementById('discounted');
    console.log('id', resultDiscount);
    const resultPriceDiscounted = document.getElementById('price-discounted');
    console.log('id', resultPriceDiscounted);*/
// fine

// creo evento
sendButton.addEventListener('click', function() {
    //2.raccolta dati
        // 1.chiedo all'utente il nomee cognome
        const fullname = fullNameField.value.trim();
        console.log('Fullname', fullname)
        
        // 2.chiedo all'utente quanti chilometri deve percorrere
        const userKm = parseInt(kmField.value.trim());
        console.log('Km', userKm)

        // 3.chiedo la fascia della sua età
        // recupero la value dell'option della select
        let userAge = ageField.value;
        // conversione value
        userAge = parseInt(userAge);
        console.log('age', userAge)


    // fine
    
    // 3.lavorazione dati
    // calcolo prezzo del biglietto       
    const ticketKm = 0.21;

    const ticketPrice = (userKm * ticketKm).toFixed(2);
    console.log('Ticket price €', ticketPrice,);
  
    // calcolo dello sconto
    let discount = 0;

    if (userAge === 65) {
        discount = 40;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    } else if (userAge === 18) {
        discount = 20;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    }
    
    // calcolo prezzo del biglietto scontato 
    let ticketDiscounted;

    if (userAge === 65 || userAge === 18){  
    console.log('discount', discount,'%');

    ticketDiscounted = (ticketPrice - ((ticketPrice * discount) / 100)).toFixed(2);
    console.log('Ticket price with discount €', ticketDiscounted,);
    }

    form.reset();
})

// button per il reset form
cancelButton.addEventListener('click', function(){
    form.reset();
})
    
// fine

// 4.generazione output
    // stampo in pagina i km
    // resultKm.innerHTML += ` <strong> ${userKm} </strong>`;

    // stampo in pagina l'età
    // resultAge.innerHTML += ` <strong> ${userAge} </strong>`;

    // stampo in pagina il prezzo del biglietto senza sconto
    // resultPrice.innerHTML += ` <strong> ${ticketPrice}€ </strong>`;

    // stampo in pagina la percentuale dello sconto
    // resultDiscount.innerHTML += `<strong> ${discount}% </strong>`;

    // stampo in pagina il prezzo finale del biglietto con lo sconto
    /*if (userAge < 18 || userAge > 65){  
    resultPriceDiscounted.innerHTML += ` <strong> ${ticketDiscounted}€ </strong>`
    } else {
    resultPriceDiscounted.innerHTML += ` <strong> ${ticketPrice}€ </strong>`
    }*/
// fine