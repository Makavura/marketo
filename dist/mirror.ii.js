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

    MktoForms2.loadForm("//i.xy.w", "STRINGFRMMRKTO", 1048, function (form) {
        // form.submit();
        // form.validate();
        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            if (inputs[index].type == "submit" && inputs[index]["form"]["id"] !== form.getFormElem()[0]["id"]) {
                $(inputs[index]).click(function (e) {
                    e.preventDefault();
                    form.validate();
                })
            }
        }

    //     form.onValidate((y) => {
    //         const validationErrorListener = setInterval(function () {
    //             /* 
    //             Webflow Error Message Removal
    //             Set a webflow-mirror-form-id data attribute to marketo form
    //             Loop through the webflow form inputs
    //             Check if next sibling is an error message display
    //             If so
    //             Find the input id of marketo form input
    //             Check if next sibling is an error message as well
    //             If so, do nothing
    //             If not, remove  
    //             */
    //             let collection = document.getElementById(form.getFormElem()[0].attributes['webflow-mirror-form-id']['value']).getElementsByTagName('input');
    //             for (item of collection) {
    //                 console.log(item);
    //                 if($(item).next().hasClass('finwferror')){
    //                     if($(item).attr('marketo-input-id')){
    //                         let marketo_mirrored_input_id = $(item).attr('marketo-input-id');
    //                         if($(`#${marketo_mirrored_input_id}`).next().hasClass('mktoError')){
    //                             console.log("element still in error state")
    //                         } else {
    //                             $(item).next().remove()
    //                         }
    //                     }
    //                 }
    //             }
    //             /* 
    //             Error Message Setting
    //             */
    //             if (document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]) {
    //                 document.querySelectorAll(`[marketo-input-id=${document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]}]`)
    //                     .forEach(function (value) {
    //                         const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
    //                         console.log(errorMessage, value, $(value)["id"], $(value).next());
    //                         /* 
    //                         Features Required:
    //                         1.Prevent Duplication of error messages 
    //                             - upon validation at this point where an error message is to be set
    //                             - check if next sibling is the error message element, if so, do not set, if not, set
    //                         2.Removal of error message if updates have been made 
    //                             -Traverse webflow form, find the elements whose next sibling is that of error message 
    //                             -check if the mirrored elements in the Marketo form's next sibling has the class mktoError
    //                             -if mktoError exists, keep error message in Webflow, if not remove error message in Webflow
    //                         */

    //                         // prevent duplication of error messages
    //                         if ($(value).next()[0]["className"] === 'finwferror') {
    //                             console.warn("Error display already set on next sibling");
    //                         } else {
    //                             $(`<div class='finwferror'>${errorMessage}</div>`).insertAfter($(value));
    //                         }
    //                         stopValidationErrorListener();
    //                     });
    //             }
    //         }, 100);

    //         function stopValidationErrorListener() {
    //             clearInterval(validationErrorListener);
    //         }
    //     })

    //     form.onSubmit((x) => {
    //         console.log(x);
    //         const submissionErrorListener = setInterval(function () {
    //             if (document.getElementsByClassName("mktoErrorMsg").length === 1) {
    //                 document.querySelectorAll('[marketo-status="error"]').forEach(function (value) {
    //                     value.style.display = 'block';
    //                     stopSubmissionErrorListener();
    //                 });
    //             }
    //         }, 100);

    //         function stopSubmissionErrorListener() {
    //             clearInterval(submissionErrorListener);
    //         }

    //     })
    //     form.onSuccess(function (values, followUpUrl) {
    //         var formElement = form.getFormElem()[0];
    //         formElement.reset();
    //         const formtoberesetid = localStorage.getItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
    //         document.getElementById(formtoberesetid).reset();
    //         localStorage.removeItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
    //         document.querySelectorAll('.w-form-done').forEach(function (el) {
    //             el.style.display = 'block';
    //         });
    //         return false;
    //     });
    // });

    /*    
    Check for submission error
    
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