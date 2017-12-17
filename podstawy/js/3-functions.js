'use strict';

function obliczOdsetki(kapital, procent) {
    
    var kapitalZOdestkami =  kapital + kapital * procent;
    
    return kapitalZOdestkami;
}
var inwestycjaAnety = obliczOdsetki(1000000, 0.015);
var inwestycjaKuby = obliczOdsetki(1000, 0.05);

console.log( inwestycjaAnety );
console.log( inwestycjaKuby );


//console.log( obliczOdsetki(1000000, 0.015) ); zeby podgladac co tam sie dzieje dla programistow

//function wyswietlWKonsoliImie(imieWyswietl) {
//    console.log(imieWyswietl);
//}
//wyswietlWKonsoliImie('Monia');
//wyswietlWKonsoliImie('Kuba');
//wyswietlWKonsoliImie('Ula');