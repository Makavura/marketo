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
    /* 
       Submission event of custom form that initiates mirroring of elements
    */
    $("#webflow-submit").click(function (e) {

        Array.from(document.getElementById("webflow").elements).forEach((element, index) => {

            document.getElementById("mktoForm_1048").elements[index]["value"] = element["value"];

            for (const [key, value] of Object.entries(element["dataset"])) {

                console.log(`${key}: ${value}`);

                if (key == 'type') {
                    if (value == 'text') {

                    } else if (value == 'number') {

                    }
                }
            }


        });
    })

});