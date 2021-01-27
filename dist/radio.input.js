$(document).ready(function () {
    /* 
     Radio based inputs
    */
    $('#webflow :input[type="radio"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="radio"]').each(function (value, i) {
            /* 
            Find index of radio button
            Find the element in mirror form that matches this index
            Mirror selection
            */
            if ($('#webflow :input[type="radio"]')[i] == $(this)) {
                console.log($(this));
                console.log($('#mktoForm_1048 :input[type="radio"]')[i]);
                if ($(this).is(":checked")) {
                    // $('#mktoForm_1048 :input[type="radio"]')[i].checked = true;
                }
                else if ($(this).is(":not(:checked)")) {
                    // $('#mktoForm_1048 :input[type="radio"]')[i].checked = true;
                }
            }
        });
    })

});