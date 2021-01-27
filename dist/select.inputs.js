$(document).ready(function () {
      /* 
    Select Inputs Only
    */
   $('select').change(function (event) {
    /* 
    For Debugging Purposes Only
    */
    // console.log(event.target.value); // value of current input
    // console.log(event.target.dataset); // data attributes of current select element
    // console.log(event.target.parentElement["className"]); // class name of parent form element

    /* 
    Variable Declaration
    */
    const _currentInputValue = event.target.value;
    const _inputDataAttributes = event.target.dataset;
    const _ = event.target.parentElement["className"];
    const _length = _.length;
    const _res = parseInt(_.slice((_length - 1)), 10);
    const _parentFormClassName = _.slice(0, (_length - 1));
    const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
    var _mirrorForm = $(`.${_mirrorFormClassName} :input`);


    console.log(_res, _parentFormClassName, _mirrorFormClassName, _mirrorForm);
    /* 
    Check Mirror Form's element's id's to find the one that matches the data attributes of the current input
    If there is a matching entry, 
    Set the mirror form's input value to the current input
    */
    for (let i = 0; i < _mirrorForm.length; i++) {
        for (const [key, value] of Object.entries(_inputDataAttributes)) {
            if (_mirrorForm[i]["id"] == value) {
                $(`#${value}`).val(`${_currentInputValue}`);
            }
        }
    }
})


});