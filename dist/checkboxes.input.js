$(document).ready(function () {
      /* 
    Checkbox based inputs
    */
   $('input[type="checkbox"]').click(function () {

    /* 
    For Debugging Purposes
    */
    console.log($(this));
    console.log($(this).data());
    console.log($(this).parent());
    console.log($(this).parent()[0]);
    console.log($(this).parent()[0]["parentElement"]);
    console.log($(this).parent()[0]["parentElement"]["id"]);
    console.log($(this).parent()[0]["parentElement"]["className"]);
    /* 
    Variable Declaration
    */
    const _inputDataAttributes = $(this).data(); // data-* attributes
    const _ = $(this).parent()[0]["parentElement"]["className"]; // current parent form className
    const _length = _.length; // length of className
    const _res = parseInt(_.slice((_length - 1)), 10); // parent form class suffix, to indicate next form that should be mirrored programmatically
    const _parentFormClassName = _.slice(0, (_length - 1)); // parent form class prefix, to indicate next form that should be mirrored programmatically
    const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
    var _mirrorForm = $(`.${_mirrorFormClassName} :input[type="checkbox"]`);

    /* 
    For Debugging Purposes
    */
    // console.log(_mirrorForm);
    // console.log(_mirrorForm[0]);
    // console.log(_mirrorForm[0]['id']);
    if ($(this).is(":checked")) {
        // console.log("Checkbox is checked.");
        document.getElementById(`${_mirrorForm[0]['id']}`).checked = true;
    }
    else if ($(this).is(":not(:checked)")) {
        // console.log("Checkbox is unchecked.");
        document.getElementById(`${_mirrorForm[0]['id']}`).checked = false;
    }
});



});