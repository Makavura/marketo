/* 
SETUP INSTRUCTIONS

set custom form inputs with a data attribute to match the id  intended field in webflow 
e.g for a name entry in marketo with an id of Name, the attribute will be data-marketoid=Name

set custom form inputs with a data attribute to match intended type e.g for email input set marketo=email
*/

$(document).ready(function () {
    /* 
    Radio
    */
    document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
        $(value).change(function (e) {
            if (document.getElementById(e.target.id).checked) {
                const _ = document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id");
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
            }
            else if (!document.getElementById(e.target.id).checked) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = false;
            }
        });
    });
    /* 
    Select inputs mirrored on change
    */
    $('select').change(function (e) {
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).setAttribute("selected", "selected");

    })
    /* 
    Checkbox
    */
    document.querySelectorAll('[marketo="checkbox"]').forEach(function (val, index) {
        $(val).change(function (e) {
            if ($(val).is(":checked")) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
            }
            else if ($(val).is(":not(:checked)")) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = false;
            }
        });
    });
    /* 
    Textarea
    */
    document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Email
    */
    document.querySelectorAll('[marketo="email"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        });
    });
    /* 
    Url
    */
    document.querySelectorAll('[marketo="url"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Slider
    */
    document.querySelectorAll('[marketo="slider"]').forEach(function (value, index) {
        $(value).change(function (e) {
            // console.log(e.target.value, index);
        })
        $(value).slider({
            min: 0,
            max: 100,
            slide: function (event, ui) {
                document.getElementById(`${document.querySelector(`#${event.target.id}`).getAttribute("marketo-input-id")}`).value = ui.value
            }
        });
    });
    /* 
    Date
    */
    document.querySelectorAll('[marketo="date"]').forEach(function (value, index) {
        $(value).change(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Submit
    */
    document.querySelectorAll('[marketo="submit"]').forEach(function (value, index) {
        $(value).click(function (e) {
            e.preventDefault();

            /* 
            Text
            */
            document.querySelectorAll('[marketo="text"]').forEach(function (value, index) {
                const _ = document.querySelector(`#${value["id"]}`).getAttribute("marketo-input-id");
                document.getElementById(`_`).value = value["value"];
            });

            /* 
            Number
            */
            document.querySelectorAll('[marketo="number"]').forEach(function (value, index) {
                    const _ = document.querySelector(`#${value["id"]}`).getAttribute("marketo-input-id");
                    $(`#${_}`).value = value["value"];
            });

            // $(`#${document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`)}`).submit();
        })
    });

});

