'use strict';
//    II sposob 
var secondLink = document.getElementsByTagName('a')[1];
function alarm (e){
    e.preventDefault();
    console.log('Klikniety link, hyc');
    console.log('Typ eventu: ' + e.type);
}
//secondLink.onclick = alarm;   

/*
secondLink.addEventListener('click', alarm);
secondLink.removeEventListener('click', alarm); //usuwamy zdarzenie
*/

var mainHeader = document.getElementById('main-header');
function zmianaCzcionki(e) {
    if (e.type == 'mouseover') {
        mainHeader.style.fontSize = '70px';
        mainHeader.style.color = 'red';
    } else {
        mainHeader.style.fontSize = 'inherit';   
        mainHeader.style.color = 'inherit';
    }
}
mainHeader.addEventListener('mouseover', zmianaCzcionki);
mainHeader.addEventListener('mouseout', zmianaCzcionki);



document.getElementById('exampleDiv').addEventListener('click', function(e){
    e.preventDefault();
    console.log('Kliknieto Div');
});
document.getElementById('exampleLink').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('Kliknieto link')
});            
                        

