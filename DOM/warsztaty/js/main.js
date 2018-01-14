'use strict';
var checkboxes = document.querySelectorAll('input[type=checkbox]');
var lastCheckbox = checkboxes[2];
console.log(lastCheckbox);

function checkboxState(){
    lastCheckbox = true;
    if (lastCheckbox == true){
        for (var i = 0;  i<checkboxes.length; i++) {
            if (i < 2){
            checkboxes[i].disabled = true;
            checkboxes[i].checked = true;
            }
        }
    }
}
lastCheckbox.onchange = checkboxState;
lastCheckbox.addEventListener('onchange', checkboxState);

var submitButton = document.getElementById('wyslij');
console.log(submitButton);
var inputText = document.querySelectorAll('input[type=text]');
console.log(inputText);

function validateForm(e){
    for (var i = 0; i<inputText.length; i++){
        if (checkboxes[i] == false || inputText == ''){
            alert('aaaa');
        }
    }        
}
submitButton.onclick = validateForm;
submitButton.addEventListener('onclick', validateForm);

















