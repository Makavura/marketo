$(document).ready(function () {
    /* 
     Radio based inputs
    */
   $('input[type="radio"]').change(function (e) {

    /* 
    For Debugging Purposes
    */
    // console.log($(this));
    // console.log($(this).data());
    // console.log($(this).parent());
    // console.log($(this).parent()[0]);
    // console.log($(this).parent()[0]["parentElement"]);
    // console.log($(this).parent()[0]["parentElement"]["id"]);
    // console.log($(this).parent()[0]["parentElement"]["className"]);
    /* 
    Variable Declaration
    */

   const form = document.getElementById(`${$(this).attr("id")}`).form;
   console.log("ID: ", e.target.id, $(this).attr("id"), form);        

    const _inputDataAttributes = $(this).data(); // data-* attributes
    const _ = $(this).parent()[0]["parentElement"]["className"]; // current parent form className
    const _length = _.length; // length of className
    const _res = parseInt(_.slice((_length - 1)), 10); // parent form class suffix, to indicate next form that should be mirrored programmatically
    const _parentFormClassName = _.slice(0, (_length - 1)); // parent form class prefix, to indicate next form that should be mirrored programmatically
    const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
    var _mirrorForm = $(`.${_mirrorFormClassName} :input[type="radio"]`);
    console.log(_inputDataAttributes, _, _length, _res, _parentFormClassName, _mirrorFormClassName);

    /* 
    Check Mirror Form's element's id's to find the one that matches the data attributes of the current input
    If there is a matching entry, 
    Set the mirror form's input value to the current input
    */
    for (let i = 0; i < _mirrorForm.length; i++) {
        for (const [key, value] of Object.entries(_inputDataAttributes)) {
            if (_mirrorForm[i]["id"] == value) {

                /* 
                  For Debugging Purposes
                */
                // console.log(_mirrorForm);
                // console.log(_mirrorForm[i]);
                // console.log(_mirrorForm[i]['id']);
                if ($(this).is(":checked")) {
                    document.getElementById(`${_mirrorForm[i]['id']}`).checked = true;
                }
                else if ($(this).is(":not(:checked)")) {
                    document.getElementById(`${_mirrorForm[i]['id']}`).checked = false;
                }
            }
        }
    }

});

});