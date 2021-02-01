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

        if (inputs[index].type == "text") {

            $(inputs[index]).keyup(function (e) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
            });

        } else if (inputs[index].type == "number") {

            $(inputs[index]).change(function (e) {
                console.log(e.target.value);
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
            });

        } else if (inputs[index].type == "radio") {

            $(inputs[index]).change(function (e) {
                if (document.getElementById(e.target.id).checked) {
                    const _ = document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id");
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
                    console.log(_);
                }
                else if (!document.getElementById(e.target.id).checked) {
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = false;
                }
            });

        } else if (inputs[index].type == "email") {

            $(inputs[index]).keyup(function (e) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
            });

        } else if (inputs[index].type == "checkbox") {

            $(inputs[index]).change(function (e) {
                console.log(e.target.checked);
                if ($(inputs[index]).is(":checked")) {
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
                }
                else if ($(inputs[index]).is(":not(:checked)")) {
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = false;
                }
            });

        } else if (inputs[index].type == "submit") {

            $(inputs[index]).click(function (e) {
                e.preventDefault();
                const submissionbuttonid = document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id");
                document.getElementById(submissionbuttonid).submit();
            });

        }
    }

    /* 
    Select inputs mirrored on change
    */
    $('select').change(function (e) {
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).setAttribute("selected", "selected");
    })

})