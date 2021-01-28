$(document).ready(function () {
    /* 
     Tel based inputs
    */
    $('#webflow :input[type="tel"]').change(function (e) {
        $('#webflow :input[type="tel"]').each(function (i, value) {
            /* 
            Find index of tel button
            Find the element in mirror form that matches this index
            Mirror selection
            */
            if ($('#webflow :input[type="tel"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="tel"]')[i].value = e.target.value;
            }
        });
    })

});