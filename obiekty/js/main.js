'use strict';

class Ogloszenie {
    constructor(tytul, opis, kategoria, status, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena;
    }
    pobierzTytul (){
        return this.tytul;
    }        
}
 var ogloszenie1 = new Ogloszenie('Sprzedam Opla', 'Kombi 2009 w dobrym stanie', 'motoryzacja', 'aktywne', 15000);
var ogloszenie2= new Ogloszenie('Sprzedam Passata', 'Igła, nie bity od Niemca', 'motoryzacja','nieaktywne',5000 );
var ogloszenie3 = new Ogloszenie('Mieszkanie M4', 'super lokalizacja', 'nieruchomości', 'aktywne', 500000);
//console.log(ogloszenie1);
//console.log(ogloszenie2);
//console.log(ogloszenie3);
//
//console.log(ogloszenie2.pobierzTytul());

var arr = [
    {tytul: 'w pustyni i w puszczy', stan:true},
    {tytul: 'rura', stan: false}
];
for (var i = 0; i < arr.length; i++){
    if(arr[i].stan == true){
        console.log('hura');
    } else {
        console.log('nie hura');
    }
}



/*class Ogloszenie { //nazwy class z duzej litery !
    constructor(tytul, cena, opis) {
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
    }
    pobierzTytul() {
        return this.tytul;
    }

    ustawCene(nowaCena) {
        this.cena = nowaCena;
    }
}
var ogloszenie1 = new Ogloszenie('Rama łóżka', 500, 'Dobra rama łóżka');
ogloszenie1.ustawCene(1500);
console.log(ogloszenie1);

var ogloszenie2 = new Ogloszenie('Sweter', 50, 'Cieply sweter');
var tytul = ogloszenie2.pobierzTytul();  //lub 
//var tytul = ogloszenie2.tytul(); 
console.log(tytul);*/