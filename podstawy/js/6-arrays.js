'use strict';

var imiona = ['Monika', 'Krystian', 'Lukasz'];
imiona[3]= 'Piotr';
imiona[2]= 'Ela';

imiona.push('Geralt');

console.log(imiona[2]+ ' i ' + imiona[0]);

imiona.pop();
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert')); //dodaje wyraz na poczatku
console.log(imiona.shift()); //usuwa wyraz na poczatku
console.log (imiona.length); //length pokazuje ile jest elementow w tablicy

//METODA JOIN zamienia elementy tablicy w jeden string
var stringZTablicy = imiona.join (' - ');
console.log(stringZTablicy);


//REVERSE zmienia kolejnosc wyrazow w tablicy
//cosole.log(imiona.reverse() );


//SORT sortuje alfabetycznie imiona
//var tablicaLiczb = [3,67,1,600,34,99,80];
var pososrtowanaTablica = imiona.sort();
console.log(pososrtowanaTablica);
