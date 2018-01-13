'use strict';
var buty = [
    {id:1, model: 'Trampki CONCERETE', rozmiar:36},
    {id:4, model: 'Trampki CONCERETE', rozmiar:37},
    {id:5, model: 'Trampki CONCERETE', rozmiar:38},
    {id:6, model: 'Tenisówki TRANS', rozmiar:39},
];

function filtrujButy(listaButow, szukanyRozmiar){
    var przefiltrowaneModele = [];
    /*for ( var i = 0; i < listaButow.length; ++i){
        if(szukanyRozmiar == listaButow[i].rozmiar) {
            przefiltrowaneModele.push( listaButow[i] );
        }
    }*/
    
    //drugi przyklad
    listaButow.forEach( function(elementTablicy){
       if(szukanyRozmiar == elementTablicy.rozmiar) {
            przefiltrowaneModele.push( elementTablicy );}
        
    });
    
    return przefiltrowaneModele;
}

var przefiltorwaneWyniki = filtrujButy(buty, 39);
console.log(przefiltorwaneWyniki);