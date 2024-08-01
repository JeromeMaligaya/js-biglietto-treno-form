//Check link
console.log('JS OK')

// 1.preparazione dati
    //1.recupero l'elemento dal Dom
    const resultKm = document.getElementById('km');
    console.log('id', resultKm);
    const resultAge = document.getElementById('age');
    console.log('id', resultAge);
    const resultPrice = document.getElementById('price');
    console.log('id', resultPrice);
    const resultDiscount = document.getElementById('discounted');
    console.log('id', resultDiscount);
    const resultPriceDiscounted = document.getElementById('price-discounted');
    console.log('id', resultPriceDiscounted);
// fine

//2.raccolta dati
    // 1.chiedo all'utente quanti chilometri deve percorrere
    const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', 150 ));
    console.log('Km', userKm); 

    // 2.chiedo all'utente la sua età
    const userAge = parseInt(prompt('Quanti anni hai?', 15 ));
    console.log('Age', userAge); 

     // ! validazione
     if (userAge <= 0 || isNaN(userAge) || isNaN(userKm)){
        alert('Uno dei valori che hai inserito non valido');
        location.reload;
    }
// fine
   
// 3.lavorazione dati
    // calcolo prezzo del biglietto  scontato       
    const ticketKm = 0.21;

    const ticketPrice = userKm * ticketKm;
    console.log('Ticket price €', ticketPrice,);
  
    // calcolo dello sconto
    let discount = 0;

    if (userAge > 65) {
        discount = 40;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    } else if (userAge < 18) {
        discount = 20;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    }
    
    // calcolo prezzo del biglietto scontato 
    let ticketDiscounted;

    if (userAge < 18 || userAge > 65){  
    console.log('discount', discount,'%');

    ticketDiscounted = (ticketPrice - ((ticketPrice * discount) / 100)).toFixed(2);
    console.log('Ticket price with discount €', ticketDiscounted,);
    }
    
// fine

// 4.generazione output
    // stampo in pagina i km
    resultKm.innerHTML += ` <strong> ${userKm} </strong>`;

    // stampo in pagina l'età
    resultAge.innerHTML += ` <strong> ${userAge} </strong>`;

    // stampo in pagina il prezzo del biglietto senza sconto
    resultPrice.innerHTML += ` <strong> ${ticketPrice}€ </strong>`;

    // stampo in pagina la percentuale dello sconto
    resultDiscount.innerHTML += `<strong> ${discount}% </strong>`;

    // stampo in pagina il prezzo finale del biglietto con lo sconto
    if (userAge < 18 || userAge > 65){  
    resultPriceDiscounted.innerHTML += ` <strong> ${ticketDiscounted}€ </strong>`
    } else {
    resultPriceDiscounted.innerHTML += ` <strong> ${ticketPrice}€ </strong>`
    }
// fine