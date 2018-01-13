'use strict';
var pierwszyDiv = document.getElementById('parFirst');
var pierwszyDiv2 = document.querySelector('#parFirst');

var rodzicDiva = pierwszyDiv.parentElement;
var rodzicDiva2 = pierwszyDiv2.parentNode;

var dzieciDiva = pierwszyDiv.childNodes[0]; //to jest jako tablica zwraca wyrazenie wraz z tekstem
var dzieciDiva2 = pierwszyDiv.childNodes; // dany element
var dzieciDiva3 = pierwszyDiv.children; //to nie jest tablica - tu dziala tylko petla for
var dzieciDiva4 = pierwszyDiv.firstChild;
var dzieciDiva5 = pierwszyDiv.lastChild;

var rodzenstwoPoprzednieDiva = pierwszyDiv.previousSibling;
var rodzenstwoPoprzednieDiva2 = pierwszyDiv.previousElementSibling;
var rodzenstwoNastepneDiva = pierwszyDiv.nextSibling;
var rodzenstwoNastepneDiva2 = pierwszyDiv.nextElementSibling;

/*var dzieciElementu = pierwszyDiv.children;
for (var i = 0; i<dzieciElementu.length; i++){
    console.log(dzieciElementu[i]);
}*/

/*
var dzieciElementu2= pierwszyDiv.childNodes;
dzieciElementu2.forEach( function (element){
    console.log(element);
});
*/

var dzieciElementu2= pierwszyDiv.childNodes;
dzieciElementu2.forEach( function (element){
    console.log('node Type ' + element.nodeType);  //pokazuje jaki typ html

});




//console.log(rodzenstwoNastepneDiva2);

