'use strict';
/*var przycisk = document.getElementById('btn')
var pierwszyParagraf = document.querySelector('p');
var drugiParagraf = document.querySelectorAll('p')[1];

function zmianaTla(e) {
    if (e.type == 'click') {
//        e.preventDefault;
        pierwszyParagraf.style.backgroundColor = 'red';
        drugiParagraf.style.backgroundColor = 'yellow';
    } else {
        pierwszyParagraf.style.backgroundColor = 'inherit';
        drugiParagraf.style.backgroundColor = 'yellow';
    }
}
przycisk.onclick = zmianaTla;*/

var btnSubmit = document.querySelector('#btn')

function blockSubmit(e){
    e.preventDefault();    console.log(document.querySelectorAll('input[type=text]'));
}
btnSubmit.addEventListener('click', blockSubmit);







