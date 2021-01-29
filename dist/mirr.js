$(document).ready(function () {
    /* 
    As a webflow user:
    give the custom form an id e.g webflow
    give the custom form submit button an id e.g webflow-submit
    give the marketo form an id e.g mkto_Form1048
    */
    const forms = [
        {
            webflow: "webflow",
            webflow_submit: "webflow-submit",
            marketo: "mktoForm_1048",
            others: [ // loop through these object elements and alter type of inputs after document is ready programmatically
                {
                    "urls": [
                        'Website-2',  // ids of elements that are to be set as urls, in order of occurence in custom form whose structure mimicks the marketo form
                    ],
                    "tels": [
                        // ''.'' ids of elements that are to be set as type of tel in order of occurence in custom form whose structure mimicks marketo's form
                    ],
                    "sliders": [
                        'slider-1',  // ids of text input elements (to be set as sliders via jquery ui) in order of occurence in custom form whose structure mimicks marketo's form
                    ],
                    "datepickers": [
                        'datepicker',  // ids of text input elements (to be set as datepickers via jquery ui) in order of occurence in custom form whose structure mimicks marketo's form
                    ]
                }
            ]
        }
    ]
    /* 
    FORM SETUP
    To be presented as an array of objects e.g forms = [ 
        { 
            webflow: "webflow", 
            webflow_submit: "webflow-submit", 
            marketo: "mkto_Form1048",
            others: [ // loop through these object elements and alter type of inputs after document is ready programmatically
                {
                    "urls": [
                        '', '' // ids of elements that are to be set as urls
                    ],
                    "tels": [
                        '','' // ids of elements that are to be set as type of tel
                    ],
                    "dates": [
                        '', '' // ids of text input elements to be set as datepickers via jquery ui
                    ],
                    "sliders": [
                        '', '' // ids of text input elements to be set as sliders via jquery ui
                    ]
                }
            ]  
        }
     ]
    Loop through array and set event listeners for all
    */
    /* 
             Requirement: Webflow form must mirror marketo form in structure 
             Why: This function depends on index to map values from custom form to desired form
             How: Loop through custom form and find data attributes that inform type of element and using index, find element in form to be mirrored in and set value
             FAQ: 
             1. Is it dynamic? Yes
             2. If so, why mimic form structure? When a change is made in the form to mirror values into, simply reflect the change in the custom form and using index, the values will be mapped accordingly
             3. Support for other input types
                 In time of this writing, only 5 text type of inputs can be created in the form designer i.e Plain, Email, Password, Phone, Number what about the other types e.g url?
                 3.1 Url - Set a text input with a unique id e.g website-2 which will be set using:     document.getElementById("Website-2").setAttribute('type', 'url');
                 3.2 Tel - same as above
                 3.3 Date - Set up with Jquery UI. Create a div with a unique id e.g date-picker and set data-attribute of data-type=date and set 
                     the following script before closing body tag </body> : 
 
                     <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> // set once to load jquery ui
                     <script>
                         $('#datepicker').datepicker(
                             {
                             dateFormat: "yy-mm-dd"
                             }
                         );
                     </script>
                 3.4 Slider - Set up with Jquery UI. Create a div with a unique id e.g slider and set data-attribute of data-type=slider and set
                 the following script before closing body tag </body> :
                   <script>
                     $(function() {
                         $( "#slider-1" ).slider();
                     });
                  </script>
 
    */

    function setUrlType(urls) {
        if (urls.length !== 0) {
            urls.forEach(function (value, index) {
                document.getElementById(`${value}`).setAttribute('type', 'url');
            });
        }
    }

    function setTelType(tels) {
        if (tels.length !== 0) {
            tels.forEach(function (value, index) {
                document.getElementById(`${value}`).setAttribute('type', 'url');
            });
        }
    }

    function setSliderEvents(sliders, marketo) {
        if (sliders.length !== 0) {
            sliders.forEach(function (value, index) {
                $(document).ready(function () {
                    $(`#${value}`).slider({
                        min: 0,
                        max: 100,
                        slide: function (event, ui) {
                            $(`#${marketo} :input[type="range"]`)[index].value = ui.value;
                        }
                    });
                });
            });
        }
    }

    function setDatePickerEvents(datepickers) {
        if (datepickers.length !== 0) {
            datepickers.forEach(function (value, index) {
                $(document).ready(function () {
                    $(`#${value}`).datepicker({
                        function(date) {
                            $(`#${marketo} :input[type="date"]`)[index].value = date;
                        }
                    });
                });
            });
        }
    }

    function setChangeEvents(entry) {
        /* 
                Email, Checkbox, Radio, Url Mirrored on Change
        */
        $(document).ready(function () {
            $(`#${entry.webflow} :input[type="email"]`).change(function (e) {
                $(`#${entry.webflow} :input[type="email"]`).each(function (i, value) {
                    if ($(`#${entry.webflow} :input[type="email"]`)[i]['id'] == e.target.id) {
                        $(`#${entry.marketo} :input[type="email"]`)[i].value = e.target.value;
                    }
                });
            })
            $(`#${entry.webflow} :input[type="checkbox"]`).change(function (e) {
                $(`#${entry.webflow} :input[type="checkbox"]`).each(function (i, value) {
                    if ($(`#${entry.webflow} :input[type="checkbox"]`)[i]['id'] == e.target.id) {
                        if ($(this).is(":checked")) {
                            $(`#${entry.marketo} :input[type="checkbox"]`)[i].checked = true;
                        }
                        else if ($(this).is(":not(:checked)")) {
                            $(`#${entry.marketo} :input[type="checkbox"]`)[i].checked = false;
                        }
                    }
                });
            })
            $(`#${entry.webflow} :input[type="radio"]`).change(function (e) {
                $(`#${entry.webflow} :input[type="radio"]`).each(function (i, value) {
                    if ($(`#${entry.webflow} :input[type="radio"]`)[i]['id'] == e.target.id) {
                        if ($(this).is(":checked")) {
                            $(`#${entry.marketo} :input[type="radio"]`)[i].checked = true;
                        }
                        else if ($(this).is(":not(:checked)")) {
                            $(`#${entry.marketo} :input[type="radio"]`)[i].checked = false;
                        }
                    }
                });
            });
            $(`#${entry.webflow} :input[type="url"]`).change(function (e) {
                $(`#${entry.webflow} :input[type="url"]`).each(function (i, value) {
                    if ($(`#${entry.webflow} :input[type="url"]`)[i]['id'] == e.target.id) {
                        $(`#${entry.marketo} :input[type="url"]`).each(function (index, val) {
                            if (index = i) {
                                $(`#${entry.marketo} :input[type="url"]`)[index].value = e.target.value;
                            }
                        })
                    }
                });
            });

        })
    }

    function setSelectChangeEvents(entry) {

        $('select').change(function (e) {
            let webflowSelects = [];
            let marketoSelects = [];
            $('select').each(function (index, value) {

                if ($(this)[0]["form"]["id"] == entry.webflow) {
                    webflowSelects.push($(this)[0]["id"])
                } else if ($(this)[0]["form"]["id"] == entry.marketo) {
                    marketoSelects.push($(this)[0]["id"]);
                }
            });

            webflowSelects.forEach(function (index, value) {
                if (value == e.target.id) {
                    document.getElementById(marketoSelects[index]).value = e.target.value;
                    document.getElementById(marketoSelects[index]).setAttribute("selected", "selected");
                }
            });
        });

    }

    function setTextAreaValues(entry){
        let webflowTextAreas = [];
        let marketoTextAreas = [];

        document.querySelectorAll("textarea").forEach(function (value, index, parent) {
            if (value["form"]["id"] == entry.webflow) {
                webflowTextAreas.push(value["id"])
            } else if (value["form"]["id"] == entry.marketo) {
                marketoTextAreas.push(value["id"])
            }
            webflowTextAreas.forEach(function(index, value){
                document.getElementById(marketoTextAreas[index]).value  = document.getElementById(value).value;
            })
        });
    }


    function setSubmissionEvents(mirrors) {
        mirrors.forEach(function (form, index) {
            setChangeEvents(form); // Email, Checkbox, Radio, Url Mirrored on Change
            setSelectChangeEvents(form); // Select
            form.others.forEach(function (element, index) {
                setUrlType(element.urls); // urls
                setSliderEvents(element.sliders, form.marketo); // sliders
                setTelType(element.tels); // tels
                setDatePickerEvents(element.datepickers); //datepickers
                setUrlType(element.urls); // urls
            });

            $(`#${form.webflow_submit}`).click(function (e) {
                /* 
                Datepicker and Urls
                */
                $(`#${form.marketo} :input[type='date']`)[0]["value"] = $('#datepicker').val();
                $(`#${form.marketo} :input[type="url"]`)[0].value = $(`#${form.webflow} :input[type="url"]`)[0].value;
                /* 
                Text & Number inputs 
                Mirrored on Submission event of parent
                */
                let WFInputs = $(`#${form.webflow} :input`);
                for (let i = 0; i < WFInputs.length; i++) {
                    if (WFInputs[i]["type"] == 'text') {
                        $(`#${form.webflow} :input[type="text"]`).each(function (index, value) {
                            if ($(`#${form.webflow} :input[type="text"]`)[index]['id'] == value["id"]) {
                                if (index == $(`#${form.webflow} :input[type="text"]`).length) {
                                    return;
                                }                                
                                $(`#${form.marketo} :input[type="text"]`)[index].value = value["value"];
                            }
                        });
                    } else if (WFInputs[i]["type"] == 'number') {
                        $(`#${webflow} :input[type="number"]`).each(function (index, value) {
                            if ($(`#${webflow} :input[type="number"]`)[index]['id'] == value["id"]) {
                                    $(`#${marketo} :input[type="number"]`)[index].value = value["value"];
                            }
                        });
                    }
                }

                setTextAreaValues(form); // textarea
                $(`#${marketo}`).submit();

            });

        });
    }

    setSubmissionEvents(forms);

});