'use strict';

/*kalkulator czasu podróży
Stworz funkcje ktora bedzie przyjmowac dwa parametry - 
dystans podrozy w km oraz predkosc podrozy w km/h. 
Funkcja ma policzyc i zwrocic czas naszej podrozy
wynik wyswietl w konsoli w postaci Dystans pokonasz w 4h
t=s/v dystans/predkosc
*/
function formatujCzas(czasPrzejazdu){
    var sformatowanyCzas;
    var godziny = Math.floor(czasPrzejazdu);
    var minuty = Math.floor((czasPrzejazdu - godziny) * 60);
    sformatowanyCzas = godziny + 'h ' + minuty + 'min';
    return sformatowanyCzas;    
}

function czasPodrozy (dystans, predkosc){
    if (predkosc <= 0 || dystans <= 0){
        console.error ("Błąd! wartość nie może być mniejsza lub równa 0");
    }
    var czas = dystans / predkosc;
    return czas;
    console.log(czas);
}
/*var czasPrzejazdu = czasPodrozy(200, 50);
console.log('Dystans pokonasz w ' + czasPrzejazdu + 'h');*/

var czasPrzejazdu = czasPodrozy(20, 80);
console.log('Dystans pokonasz w ' + formatujCzas( czasPrzejazdu));
