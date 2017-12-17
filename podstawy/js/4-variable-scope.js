'use strict';
var ilosc1 = 3500;
var ilosc2 = 5000;
var ilosc3 = 7500;
var ilosc4 = 2500;

ilosc2 = 3000;

function policzSumeKasy (iloscOsoby1, iloscOsoby2, iloscOsoby3, iloscOsoby4, wiek) {
    
    var sumaKasy;
        sumaKasy = iloscOsoby1 + iloscOsoby2 + iloscOsoby3 + iloscOsoby4;
    
        var osoba = [sumaKasy, wiek];
        
        return osoba;
    }

var osobaZObliczeniami = policzSumeKasy(ilosc3, ilosc2, ilosc1, ilosc4, 25);

console.log (osobaZObliczeniami);
    