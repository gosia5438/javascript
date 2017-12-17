'use strict';
//PETLA FOR

for (var i=10 ; i>0 ; i--) {    
    console.log(i);
}

//FORE EACH WYKONYWANA NA TABLICACH
var tablica = ['Krystian', 'Monika', 'Danuta']; //element to wartosc z tablicy Krystian, monika, Danuta a index to wartosc 0,1,2
tablica.forEach( function(element, index) {
    console.log ('Element z Indexem :'+ index + ' ma wartosc ' + element);
});

for (var i=0; i < tablica.length; i++) {
     console.log ('Element z Indexem :'+ i + ' ma wartosc ' + tablica[i]);
}

var it = 0;
while (it < tablica.length) {
    console.log (tablica[it]);
    it++;
}

var iter = 2;
do {
    iter ++;
    console.log(iter);
    } while (iter < 5)

var a = 0;
while (a < 10) {
    console.log(a++);
    if (a==5){
        break;
    }
}
       
for (var b=0; b<5 ; ++b) {
    if (b==2) {
        continue;  //skocz do konca (pomin 2) i zacznij dalej
    } else {
        console.log(b);
    }
}

