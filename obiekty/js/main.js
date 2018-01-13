'use strict';
class Ogloszenie { //nazwy class z duzej litery !
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
console.log(tytul);