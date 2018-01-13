'use strict';
/*      var istniejacyWezel =document.getElementById('parFirst').children[2];
//console.log(istniejacyWezel);

var nowyElement = document.createElement("p");
var nowyTekst = document.createTextNode("To jest nowy akapit");

nowyElement.appendChild(nowyTekst);
istniejacyWezel.appendChild(nowyElement);
istniejacyWezel.removeChild(nowyElement);
//console.log(istniejacyWezel);

var link = document.querySelectorAll('.link')[2];
link.parentElement.insertBefore(nowyElement, link); // przed link wstaw nowyElement zawsze trzeba podac rodzica
console.log(link);        */

// Dodaj znacznik <b> po kazdym linku i usun z nich atrybuty klasy
var wszystkieLinki = document.querySelectorAll('a');

for (var i = 0; i < wszystkieLinki.length; i++) {
    var br = document.createElement('br');
    wszystkieLinki[i].parentElement.insertBefore(br, wszystkieLinki[i].nextSibling);
    wszystkieLinki[i].removeAttribute('class');
}
