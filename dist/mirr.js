$(document).ready(function () {
    /* 
    As a webflow user:
    give the custom form an id e.g webflow
    give the custom form submit button an id e.g webflow-submit
    give the marketo form an id e.g mkto_Form1048
    */
    const webflow = "webflow";
    const webflow_submit = "webflow-submit";
    const marketo = "mkto_Form1048";
    const forms = [
        {
            webflow: "webflow",
            webflow_submit: "webflow-submit",
            marketo: "mkto_Form1048",
            others: [ // loop through these object elements and alter type of inputs after document is ready programmatically
                {
                    "urls": [
                        '', '' // ids of elements that are to be set as urls, in order of occurence in custom form whose structure mimicks the marketo form
                    ],
                    "tels": [
                        '', '' // ids of elements that are to be set as type of tel in order of occurence in custom form whose structure mimicks marketo's form
                    ],
                    "sliders": [
                        '', '' // ids of text input elements (to be set as sliders via jquery ui) in order of occurence in custom form whose structure mimicks marketo's form
                    ]
                }
            ]
        }
    ]
    /* 
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
        document.getElementById("Website-2").setAttribute('type', 'url');
    }

    function setTelType(tels) {
        document.getElementById("Website-2").setAttribute('type', 'tel');
    }

    function setSliderEvents(sliders) {

        sliders.forEach(function (value, index) {
            $(document).ready(function () {
                $(`#${slider_id}`).slider({
                    min: 0,
                    max: 100,
                    slide: function (event, ui) {
                        $(`#${marketo} :input[type="range"]`)[index].value = ui.value;
                    }
                });
            });
        });
    }

    function setSubmissionEvents() {
        $(`#${webflow_submit}`).click(function (e) {
            /* 
            Datepicker and Urls
            */
            $(`#${marketo} :input[type='date']`)[0]["value"] = $('#datepicker').val();
            $(`#${marketo} :input[type="url"]`)[0].value = $(`#${webflow} :input[type="url"]`)[0].value;
            /* 
            Text & Number inputs 
            Mirrored on Submission event of parent
            */
            let WFInputs = $(`#${webflow} :input`);
            for (let i = 0; i < WFInputs.length; i++) {
                if (WFInputs[i]["type"] == 'text') {
                    $(`#${webflow} :input[type="text"]`).each(function (index, value) {
                        if ($(`#${webflow} :input[type="text"]`)[index]['id'] == value["id"]) {
                            console.log(index);
                            if (index == 3) {
                                return;
                            }
                            $('#${mktoForm_1048} :input[type="text"]')[index].value = value["value"];
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

            $(`#${marketo}`).submit();

            return null;

            Array.from(document.getElementById(`${webflow}`).elements).forEach((element, index) => {
                /* 
                Issue: Sets only text inputs
                */
                document.getElementById(`${marketo}`).elements[index]["value"] = element["value"];
                for (const [key, value] of Object.entries(element["dataset"])) {
                    console.log(`${key}: ${value}`);
                    /* 
                    Using Data attributes, segragate type and find subsequent element in Form to be mirrored onto and set value
                    
                    Problem: 
                    For one type of element, there are several number of similar elements in form to be mirrored onto
                    How to know which of the children element's value is to be set?

                    Alternative Solution 1:
                    In dynamic set up of event listeners
                    loop through elements and keep count of index and for each element's value whose index is current count in form to be mirrored is set
                    */

                    /* 
                    Ideal for datepickers
                    For the input elements for datepickers
                    Set a data-attribute data-type="date"
                    */
                    if (key == "type") {
                        if (value == "date") {

                        }
                    }
                }
            });
        });


    }

    function setChangeEvents() {
        /* 
                Email, Checkbox, Radio, Url, Range(Slider)
                Mirrored on Change
        */
        $(document).ready(function () {
            $(`#${webflow} :input[type="email"]`).change(function (e) {
                $(`#${webflow} :input[type="email"]`).each(function (i, value) {
                    if ($(`#${webflow} :input[type="email"]`)[i]['id'] == e.target.id) {
                        $(`#${marketo} :input[type="email"]`)[i].value = e.target.value;
                    }
                });
            })
            $(`#${webflow} :input[type="checkbox"]`).change(function (e) {
                $(`#${webflow} :input[type="checkbox"]`).each(function (i, value) {
                    if ($(`#${webflow} :input[type="checkbox"]`)[i]['id'] == e.target.id) {
                        if ($(this).is(":checked")) {
                            $(`#${marketo} :input[type="checkbox"]`)[i].checked = true;
                        }
                        else if ($(this).is(":not(:checked)")) {
                            $(`#${marketo} :input[type="checkbox"]`)[i].checked = false;
                        }
                    }
                });
            })
            $(`#${webflow} :input[type="radio"]`).change(function (e) {
                $(`#${webflow} :input[type="radio"]`).each(function (i, value) {
                    if ($(`#${webflow} :input[type="radio"]`)[i]['id'] == e.target.id) {
                        if ($(this).is(":checked")) {
                            $(`#${marketo} :input[type="radio"]`)[i].checked = true;
                        }
                        else if ($(this).is(":not(:checked)")) {
                            $(`#${marketo} :input[type="radio"]`)[i].checked = false;
                        }
                    }
                });
            });
            $(`#${webflow} :input[type="url"]`).change(function (e) {
                $(`#${webflow} :input[type="url"]`).each(function (i, value) {
                    if ($(`#${webflow} :input[type="url"]`)[i]['id'] == e.target.id) {
                        $(`#${marketo} :input[type="url"]`).each(function (index, val) {
                            if (index = i) {
                                $(`#${marketo} :input[type="url"]`)[index].value = e.target.value;
                            }
                        })
                    }
                });
            });

        })
    }

    function globalEvents() {
        document.querySelectorAll("textarea").forEach(function (value, index, parent) {
            if (index == ((document.querySelectorAll("textarea").length / 2))) {
                return true;
            }
            document.querySelectorAll("textarea")[`${(document.querySelectorAll("textarea").length / 2)}`].value = document.querySelectorAll("textarea")[index].value;
        })

        $('select').change(function (e) {
            $('select').each(function (index, value) {
                if ($('select')[index]['id'] == e.target.id) {
                    if (index == ($('select').length / 2)) {
                        return;
                    }
                    const _ = (($('select').length / 2) + index);
                    $('select')[_].options
                    for (let i = 0; i < $('select')[_].options.length; i++) {
                        if ($('select')[index].value == $('select')[_].options[i].value) {
                            $('select')[_].options[i]['selected'] = true;
                        }
                    }
                }
            });
        });
    }

});