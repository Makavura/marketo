$(document).ready(function () {
    /* 
     Email based inputs
    */
    $('#webflow :input[type="email"]').change(function (e) {
        $('#webflow :input[type="email"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
            if ($('#webflow :input[type="email"]')[i]['id'] == e.target.id) {
                $('#mktoForm_1048 :input[type="email"]')[i].value = e.target.value;
            }
        });
    })

});