'use strict';

var wzrostMateusza= 189;
var wzrostOlgi = 188;

if (wzrostOlgi < wzrostMateusza ) {
    console.log("Olga jest niższa: ")
}


if (wzrostOlgi > wzrostMateusza) {
    console.log('Olga jest wyższa :');
} else {
    console.log('Olga jest niższa :');
}


if (wzrostOlgi > wzrostMateusza) {
    console.log('Olga jest wyższa :');
} 
else if (wzrostOlgi == wzrostMateusza){ 
    console.log("Olga jest równa z Mateuszem")
}
else {
    console.log('Olga jest niższa :');
}


var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}
