/* 
SETUP INSTRUCTIONS

set custom form inputs with a data attribute to match the id  intended field in webflow 
e.g for a name entry in marketo with an id of Name, the attribute will be data-marketoid=Name

set custom form inputs with a data attribute to match intended type e.g for email input set marketo=email
*/

$(document).ready(function () {
    /* 
    Text
    */
    document.querySelectorAll('[marketo="text"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            console.log(e.target.id);
            document.getElementById(`${$(this).data('marketoid')}`).value = e.target.value;
        })
    });

    /* 
    Number
    */
    document.querySelectorAll('[marketo="number"]').forEach(function (value, index) {
        $(value).change(function (e) {
            document.getElementById(`${$(this).data('marketoid')}`).value = e.target.value;
        })
    });
    /* 
    Radio
    */
    document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
        $(value).change(function (e) {
            if ($(this).prop(":checked")) {
                console.log(e);
                document.getElementById(`#${$(this).data('marketoid')}`).checked = true;
            }
            else if ($(this).prop(":not(:checked)")) {
                console.log(e);
                document.getElementById(`#${$(this).data('marketoid')}`).checked = false;
            }
        });
    });
    /* 
    Select inputs mirrored on change
    */
    $('select').change(function (e) {

        document.getElementById($(this).data('marketoid')).value = e.target.value;
        document.getElementById($(this).data('marketoid')).setAttribute("selected", "selected");

    })
    /* 
    Checkbox
    */
    document.querySelectorAll('[marketo="checkbox"]').forEach(function (val, index) {
        console.log($(val))
        $(val).keyup(function (e) {
            console.log(e, e.target.value)
            if ($(val).is(":checked")) {
                console.log(e);
                document.getElementById(`#${$(this).data('marketoid')}`).checked = true;
            }
            else if ($(val).is(":not(:checked)")) {
                console.log(e);
                document.getElementById(`#${$(this).data('marketoid')}`).checked = false;
            }
        });
    });
    /* 
    Textarea
    */
    document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById($(this).data('marketoid')).value = e.target.value;
        })
    });
    /* 
    Email
    */
    document.querySelectorAll('[marketo="email"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById($(this).data('marketoid')).value = e.target.value;
        });
    });
    /* 
    Url
    */
    document.querySelectorAll('[marketo="url"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById($(this).data('marketoid')).value = e.target.value;
        })
    });
    /* 
    Slider
    */
    document.querySelectorAll('[marketo="slider"]').forEach(function (value, index) {
        $(value).change(function (e) {
            console.log(e.target.value, index);
        })
        $(value).slider({
            min: 0,
            max: 100,
            slide: function (event, ui) {
                document.getElementById($(this).data('marketoid')).value = ui.value

            }
        });
    });
    /* 
    Date
    */
    document.querySelectorAll('[marketo="date"]').forEach(function (value, index) {
        $(value).change(function (e) {
            document.getElementById($(this).data('marketoid')).value = e.target.value;
        })
    });
    /* 
    Submit
    */
    document.querySelectorAll('[marketo="submit"]').forEach(function (value, index) {
        $(value).click(function (e) {
            e.preventDefault();
            $(`#${$(this).data('marketoid')}`).submit();
        })
    });

});

