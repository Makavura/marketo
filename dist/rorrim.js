/* 
SETUP INSTRUCTIONS

set custom form inputs with a data attribute to match the id  intended field in webflow 
e.g for a name entry in marketo with an id of Name, the attribute will be marketo-input-id=Name

set custom form inputs with a data attribute to match intended type e.g for email input set marketo-input-type=email
*/

$(document).ready(function () {
    /* 
    Radio
    */
    document.querySelectorAll('[marketo-input-type="radio"]').forEach(function (value, index) {
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
    document.querySelectorAll('[marketo-input-type="checkbox"]').forEach(function (val, index) {
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
    document.querySelectorAll('[marketo-input-type="textarea"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Email
    */
    document.querySelectorAll('[marketo-input-type="email"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        });
    });
    /* 
    Url
    */
    document.querySelectorAll('[marketo-input-type="url"]').forEach(function (value, index) {
        $(value).keyup(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Slider
    */
    document.querySelectorAll('[marketo-input-type="slider"]').forEach(function (value, index) {
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
    document.querySelectorAll('[marketo-input-type="date"]').forEach(function (value, index) {
        $(value).change(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    /* 
    Submit
    */
    document.querySelectorAll('[marketo-input-type="submit"]').forEach(function (value, index) {
        $(value).click(function (e) {
            e.preventDefault();

            /* 
            Text
            */
            document.querySelectorAll('[marketo-input-type="text"]').forEach(function (value, index) {
                const _ = document.querySelector(`#${value["id"]}`).getAttribute("marketo-input-id");
                if(_){
                    const _id = value["id"];
                    document.getElementById(_).value = document.getElementById(_id).value;
                }

            });

            /* 
            Number
            */
            document.querySelectorAll('[marketo-input-type="number"]').forEach(function (value, index) {
                    const _ = document.querySelector(`#${value["id"]}`).getAttribute("marketo-input-id");
                    if(_){
                        const _id = value["id"];
                        document.getElementById(_).value = document.getElementById(_id).value;
                    }
            });

            console.log(document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id"));
            // $(`#${document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`)}`).submit();
        })
    });

});

