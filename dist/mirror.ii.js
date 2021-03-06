$(document).ready(function () {
    textareas = document.getElementsByTagName('textarea');
    for (indice = 0; indice < textareas.length; ++indice) {
        $(textareas[indice]).change(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        });
    }
    document.querySelectorAll('[marketo-input-type="slider"]').forEach(function (value) {
        $(value).change(function (e) {
        })
        $(value).slider({
            min: 0,
            max: 100,
            slide: function (event, ui) {
                document.getElementById(`${document.querySelector(`#${event.target.id}`).getAttribute("marketo-input-id")}`).value = ui.value
            }
        });
    });
    document.querySelectorAll('[marketo-input-type="date"]').forEach(function (value) {
        $(value).change(function (e) {
            document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        })
    });
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].type == "text") {
            $(inputs[index]).keyup(function (e) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
            });
        } else if (inputs[index].type == "number") {
            $(inputs[index]).change(function (e) {
                document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
            });
        } else if (inputs[index].type == "radio") {
            $(inputs[index]).change(function (e) {
                if (document.getElementById(e.target.id).checked) {
                    const _ = document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id");
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
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
                if (e.target.checked) {
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = true;
                }
                else if (!e.target.checked) {
                    document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).checked = false;
                }
            });
        } else if (inputs[index].type == "submit") {
            $(inputs[index]).click(function (e) {
                e.preventDefault();
                document.querySelectorAll('.w-form-done').forEach(function (el) {
                    el.style.display = 'none';
                });
                document.querySelectorAll('.w-form-error').forEach(function (el) {
                    el.style.display = 'none';
                });
                const submissionbuttonid = document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id");
                console.log(e.target.id);
                let formtoberesetid = document.getElementById(`${e.target.id}`)["form"]["id"]
                localStorage.setItem("FORMTOBERESETONSUCCESSOFSUBMISSION", formtoberesetid);;
                $(`form#${submissionbuttonid} :input[type='submit']`).each(function () {
                    var input = $(this);
                    input[0].click();
                });
            })
        }
    }
    $('select').change(function (e) {
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).value = e.target.value;
        document.getElementById(`${document.querySelector(`#${e.target.id}`).getAttribute("marketo-input-id")}`).setAttribute("selected", "selected");
    });
});