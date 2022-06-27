/* Creato un array contenente una lista di cinque immagini tra quelle 
fornite, creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi 
    su questo, date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e 
inseriamo l'immagine grande in modo da poter stilare lo slider; avremo 
così la struttura base e gli stili pronti per poterci poi concentrare 
solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini 
dinamicamente servendoci dell'array fornito e un semplice ciclo for. 
Possiamo concatenare una stringa con un template literal oppure utilizzare
 gli altri metodi di manipolazione del DOM che abbiamo visto insieme.
  Al termine di questa fase ci ritroveremo con lo stesso slider, 
  ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa 
visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è 
la prima e l'utente clicca la freccia per andare indietro, la miniatura che
 deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se 
 l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire 
in evidenza l’immagine equivalente a quella attiva, scegliete liberamente
 se scurire le altre immagini oppure se evidenziarla semplicemente con un 
 bordo. Tra queste miniature, quella corrispondente all'immagine attiva 
 deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla 
 diversamente rispetto alle altre o aggiungere un semplice bordo. */

 console.log ('JS OK')

 //recupero tutte le immagini dal DOM
 const images=document.querySelectorAll('#carousel img');

 //prepariamo una variabile per "tenere d'occhio" l'immagine attiva
let currentActiveIndex = 0;

//imposta come prima immagine la prima
images[currentActiveIndex].classList.add('active')

//recupero i bottonni
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//FRECCIA DESTRA
nextButton.addEventListener('click',function(){
images[currentActiveIndex].classList.remove ('active');
currentActiveIndex++;
    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }
    images[currentActiveIndex].classList.add('active')
});
//freccia sinistra
prevButton.addEventListener('click',function(){
images[currentActiveIndex].classList.remove ('active');
 currentActiveIndex--;
 if (currentActiveIndex === -1) {
    currentActiveIndex = 4;
}
images[currentActiveIndex].classList.add('active');
});
    


