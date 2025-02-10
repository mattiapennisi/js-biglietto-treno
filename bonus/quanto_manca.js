// QUANTO MANCA: Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possiamo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.

// Variabile che genera le attuali data e ora

let date = new Date()

let hours = date.getHours()

let minutes = date.getMinutes()

let seconds = date.getSeconds()

let minutesDifference = 60 - minutes

alert(`Sono le ${hours}:${minutes}:${seconds}. Mancano ${minutesDifference} minuti alla prossima ora.`)