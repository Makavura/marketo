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
                form.validate();
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


/*    
Check for submission error
    MktoForms2.loadForm("//i.xy.w", "STRINGFRMMRKTO", 1048, function (form) {
        // form.submit();
        form.validate();
        form.onValidate((y) => {
            const validationErrorListener = setInterval(function () {
            if(document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]){
                    document.querySelectorAll(`[marketo-input-id=${document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]}]`).forEach(function (value) {
                    const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
                    console.log(errorMessage, value);
                    // replace content between tick marks in the next statement that you have designed to contain the mirrored error message. it will be displayed during run time in ${errorMessage}
                    $(`
                    <div class="mktoError" style="right: 6px; bottom: -34px;">
                    <div class="mktoErrorArrowWrap">
                    <div class="mktoErrorArrow"></div></div>
                    <div id="ValidMsgFirstName" role="alert" tabindex="-1" class="mktoErrorMsg">${errorMessage}</div></div>
                    `).insertAfter($(value));
                        stopValidationErrorListener();
                    });
                }
            }, 100);

           function stopValidationErrorListener(){
                clearInterval(validationErrorListener);
            }
        })
        form.onSubmit((x) => {
            console.log(x);
            const submissionErrorListener = setInterval(function () {
                if (document.getElementsByClassName("mktoErrorMsg").length === 1) {
                    document.querySelectorAll('[marketo-status="error"]').forEach(function (value) {
                        value.style.display = 'block'; 
                        stopSubmissionErrorListener();
                    });
                }
            }, 100);

           function stopSubmissionErrorListener(){
                clearInterval(submissionErrorListener);
            }

        })
        form.onSuccess(function (values, followUpUrl) {
            var formElement = form.getFormElem()[0];
            formElement.reset();
            const formtoberesetid = localStorage.getItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
            document.getElementById(formtoberesetid).reset();
            localStorage.removeItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
            document.querySelectorAll('.w-form-done').forEach(function (el) {
                el.style.display = 'block';
            });
            return false;
        });
    });

 */
})

/*

Marketo Embed Script

<script src="//i.xy.w/js/forms2/js/forms2.min.js"></script>
<form id="mktoForm_1048" class="form-2"></form>
<script>
MktoForms2.loadForm("//i.xy.w", "STRINGFRMMRKTO", 1048, function(form) {
    //form.submit();
    //form.onSubmit((x) => {
    //console.log(x);
    //})
    form.onSuccess(function(values, followUpUrl){
        var formElement = form.getFormElem()[0];
        formElement.reset();
        const formtoberesetid = localStorage.getItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
        document.getElementById(formtoberesetid).reset();
        localStorage.removeItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
        document.querySelectorAll('.w-form-done').forEach(function(el) {
                    el.style.display = 'block';
                 });
        return false;
    });
});
</script>
*/