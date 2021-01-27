/* 
INSTRUCTIONS
Name data attributes to match Marketo's/Mirror form Input element's ids
Give First Form a class name e.g formhelper-1 and a unique ID
Give First Form button submit a unique ID
Give second form an different class that mirrors the first form - e.g formhelper-2 
Radio Buttons Require name to be similar if only one is to be selected, 
if choice is being made between a different set, set a different name
On Change of Select, Multiple Select, Checkbox and Radio button change, input values will be reflected in the mirror form
On Submit, Text, Number, Email & Password form input values will be fetched and filled 
*/
/* 
On Selection
Fetch Value 
Set Value in Child Form
*/
$(document).ready(function () {


    /* 
    Rabge based inputs
   */
    $('input[type="range"]').change(function (e) {

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
        const _inputDataAttributes = $(this).data(); // data-* attributes
        const _ = $(this).parent()[0]["parentElement"]["className"]; // current parent form className
        const _length = _.length; // length of className
        const _res = parseInt(_.slice((_length - 1)), 10); // parent form class suffix, to indicate next form that should be mirrored programmatically
        const _parentFormClassName = _.slice(0, (_length - 1)); // parent form class prefix, to indicate next form that should be mirrored programmatically
        const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
        var _mirrorForm = $(`.${_mirrorFormClassName} :input[type="radio"]`);
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


    /* 
     Radio based inputs
    */
    $('input[type="radio"]').change(function (e) {

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
        var _mirrorForm = $(`.${_mirrorFormClassName} :input[type="radio"]`);
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


    /* 
    
    Refactor script to  listen to submission event of first form
    Text & Numerical Inputs
    */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();
        /* 
        Setup programmatic form submission
        */
        // console.log(e.target.parentElement["className"]);
        const _ = e.target.parentElement["className"];
        const _length = _.length;
        const _res = parseInt(_.slice((_length - 1)), 10);
        const _parentFormClassName = _.slice(0, (_length - 1));
        const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
        /* 
        Get all inputs from first form
        */

        let initialFormInputs = $("#webflow :input");
        let mirrorFormInputs = $("#mktoForm_1048 :input");


        for (let i = 0; i < initialFormInputs.length; i++) {
            /* 
            Access their inner values
            */
            console.log("BISCUITS");
            console.log($(`#${initialFormInputs[i]["id"]}`).attr('type'));
            console.log($(`#${initialFormInputs[i]["id"]}`));
            if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'email') {
                /* 
                Set email values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'text') {
                /* 
                Set text values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'password') {
                /* 
                Set password values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'number') {
                /* 
                Set number values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            }

        }
        console.log(mirrorFormInputs);
        console.log(initialFormInputs);
        console.log(_mirrorFormClassName);
        _mirrorForm = document.getElementsByClassName(_mirrorFormClassName);
        _mirrorFormData = new FormData(_mirrorForm);
        console.log(_mirrorFormData);

    });

    $('#marketo-submit').click(function (e) {
        e.preventDefault();

        console.log("CLICKED....HHH")
    });

    $("#email-form").submit(function (event) {
        console.warn("Handler for .submit() called.");

        event.preventDefault();
        return false;
    });

    $('#webflow-submit').click(function (e) {
        e.preventDefault();

        console.log("CLICKED....HHH")
    });

});