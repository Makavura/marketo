/* 
INSTRUCTIONS
Name data attributes to match Marketo's/Mirror form Input element's ids
Give First Form a class name e.g formhelper-1 and a unique ID
Give First Form button submit a unique ID
Give second form an different class that mirrors the first form - e.g formhelper-2 
Radio Buttons Require name to be similar if only one is to be selected, 
if choice is being made between a different set, set a different name
On Change of Select, Multiple Select, Checkbox and Radio button change, input values will be reflected in the mirror form
On Submit, Text, Number, Email & Password form input values will be fetched and filled 
*/
/* 
On Selection
Fetch Value 
Set Value in Child Form
*/
$(document).ready(function () {

    $('#marketo-submit').click(function (e) {
        e.preventDefault();

        console.log("CLICKED....HHH")
    });

    $("#email-form").submit(function (event) {
        console.warn("Handler for .submit() called.");

        event.preventDefault();
        return false;
    });

    $('#webflow-submit').click(function (e) {
        e.preventDefault();

        console.log("CLICKED....HHH")
    });

});