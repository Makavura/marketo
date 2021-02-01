/* 
SETUP INSTRUCTIONS

set custom form inputs with a data attribute to match the id  intended field in webflow 
e.g for a name entry in marketo with an id of Name, the attribute will be marketo-input-id=Name

set custom form inputs with a data attribute to match intended type e.g for email input set marketo-input-type=email
*/

$(document).ready(function () {


    /* 
    Inputs
    */

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        console.log(inputs[index]);
    }

})