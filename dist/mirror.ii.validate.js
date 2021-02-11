form.onValidate((y) => {
    const validationErrorListener = setInterval(function () {
        /* 
        Webflow Error Message Removal
        Set a webflow-mirror-form-id data attribute to marketo form e.g :
            <script src="//info.xyz.com/js/forms2/js/forms2.min.js"></script>
            <form id="mktoForm_1048" webflow-mirror-form-id="webflow"  class="form-2"></form>
            
        Loop through the webflow form inputs
        Check if next sibling is an error message display
        If so
        Find the input id of marketo form input
        Check if next sibling is an error message as well
        If so, do nothing
        If not, remove  
        */
        let input_collection = document.getElementById(form.getFormElem()[0].attributes['webflow-mirror-form-id']['value']).getElementsByTagName('input');
        let select_collection = document.getElementById(form.getFormElem()[0].attributes['webflow-mirror-form-id']['value']).getElementsByTagName('select');

        for (item of input_collection) {
            if ($(item).next().hasClass('finwferror')) {
                if ($(item).attr('marketo-input-id')) {
                    let marketo_mirrored_input_id = $(item).attr('marketo-input-id');
                    if ($(`#${marketo_mirrored_input_id}`).next().hasClass('mktoError')) {
                        console.log("element still in error state")
                    } else {
                        $(item).next().remove()
                    }
                }
            }
        }
        for (item of select_collection) {
            if ($(item).next().hasClass('finwferror')) {
                if ($(item).attr('marketo-input-id')) {
                    let marketo_mirrored_input_id = $(item).attr('marketo-input-id');
                    if ($(`#${marketo_mirrored_input_id}`).next().hasClass('mktoError')) {
                        console.log("element still in error state")
                    } else {
                        $(item).next().remove()
                    }
                }
            }
        }
        // console.log(document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].childNodes);
        let parent_child_nodes = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].childNodes;
        Array.prototype.forEach.call(parent_child_nodes, function (element) {
            // console.log(element.nodeName);
            if (element.nodeName.toLowerCase() == 'select') {
                if (document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('select')[0]["id"]) {
                    document.querySelectorAll(`[marketo-input-id=${document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('select')[0]["id"]}]`)
                        .forEach(function (value) {
                            const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
                            console.log(errorMessage, value, $(value)["id"], $(value).next());
                            if ($(value).next()[0]["className"] === 'finwferror') {
                                console.warn("Error display already set on next sibling");
                            } else {
                                $(`<div class='finwferror'>${errorMessage}</div>`).insertAfter($(value));
                            }
                            stopValidationErrorListener();
                        });
                }
            } else if (element.nodeName.toLowerCase() == 'input') {
                if (document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]) {
                    document.querySelectorAll(`[marketo-input-id=${document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]}]`)
                        .forEach(function (value) {
                            const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
                            console.log(errorMessage, value, $(value)["id"], $(value).next());
                            if ($(value).next()[0]["className"] === 'finwferror') {
                                console.warn("Error display already set on next sibling");
                            } else {
                                $(`<div class='finwferror'>${errorMessage}</div>`).insertAfter($(value));
                            }
                            stopValidationErrorListener();
                        });
                }
            } else if (element.nodeName.toLowerCase() == 'div') {
                let div_child_nodes = element.childNodes;
                Array.prototype.forEach.call(div_child_nodes, function (element, indice) {
                    if (element.tagName.toLowerCase() == 'input') {
                        if (element.type == 'radio') {
                            document.querySelectorAll(`[marketo-input-id=${element.id}]`)
                                .forEach(function (value) {
                                    const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
                                    console.log($(value).parent().parent());
                                    if (indice == 0) {
                                        if ($(value).parent().parent().prev()[0]["className"] === 'finwferror') {
                                            // console.warn("Error display already set on next sibling");
                                        } else {
                                            $(`<div class='finwferror'>${errorMessage}</div>`).insertBefore($(value).parent().parent());
                                        }
                                    } else { console.warn("already set error status") }
                                })
                        } else if (element.type == 'checkbox') {
                            document.querySelectorAll(`[marketo-input-id=${element.id}]`)
                            .forEach(function (value) {
                                const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
                                console.log($(value).parent(), errorMessage);
                                if ($(value).parent().prev()[0]["className"] === 'finwferror') {
                                    // console.warn("Error display already set on next sibling");
                                } else {
                                    $(`<div class='finwferror'>${errorMessage}</div>`).insertBefore($(value).parent());
                                }
                            })
                        }
                        stopValidationErrorListener();
                    }
                });
            }
        })

    }, 100);
    function stopValidationErrorListener() {
        clearInterval(validationErrorListener);
    }
});

/*
Error Message Setting
*/
if (document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]) {
    document.querySelectorAll(`[marketo-input-id=${document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].getElementsByTagName('input')[0]["id"]}]`)
        .forEach(function (value) {
            const errorMessage = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["innerText"];
            console.log(errorMessage, value, $(value)["id"], $(value).next());
            /* 
            Features Required:
            1.Prevent Duplication of error messages 
                - upon validation at this point where an error message is to be set
                - check if next sibling is the error message element, if so, do not set, if not, set
            2.Removal of error message if updates have been made 
                -Traverse webflow form, find the elements whose next sibling is that of error message 
                -check if the mirrored elements in the Marketo form's next sibling has the class mktoError
                -if mktoError exists, keep error message in Webflow, if not remove error message in Webflow
            */

            // prevent duplication of error messages
            if ($(value).next()[0]["className"] === 'finwferror') {
                console.warn("Error display already set on next sibling");
            } else {
                $(`<div class='finwferror'>${errorMessage}</div>`).insertAfter($(value));
            }
            stopValidationErrorListener();
        });
}