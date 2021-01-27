$(document).ready(function () {
    /* 
     Radio based inputs
    */
    $('#webflow :input[type="radio"]').each(function (value, i) {

        /* 
        Find index of radio button
        Find the element in mirror form that matches this index
        Mirror selection
        */
        if ($(this).is(":checked")) {
            $('#mktoForm_1048 :input[type="radio"]')[i].checked = true;
        }
        else if ($(this).is(":not(:checked)")) {
            $('#mktoForm_1048 :input[type="radio"]')[i].checked = true;
        }

    });

});