form.onValidate((y) => {
    const validationErrorListener = setInterval(function () {
        let input_collection = document.getElementById(form.getFormElem()[0].attributes['webflow-mirror-form-id']['value']).getElementsByTagName('input');
        let select_collection = document.getElementById(form.getFormElem()[0].attributes['webflow-mirror-form-id']['value']).getElementsByTagName('select');
        for (item of input_collection) {
            if ($(item).next().hasClass('finwferror')) {
                if ($(item).attr('marketo-input-id')) {
                    let marketo_mirrored_input_id = $(item).attr('marketo-input-id');
                    if ($(`#${marketo_mirrored_input_id}`).next().hasClass('mktoError')) {
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
                    } else {
                        $(item).next().remove()
                    }
                }
            }
        }
        let parent_child_nodes = document.getElementsByClassName("mktoErrorMsg")[0]["parentElement"]["parentElement"].childNodes;
        Array.prototype.forEach.call(parent_child_nodes, function (element) {
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
