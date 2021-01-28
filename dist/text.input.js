$(document).ready(function () {
    /* 
     Text based inputs
    */
    $('#webflow :input[type="text"]').keyup(function (e) {
        console.log($(this));
        $('#webflow :input[type="text"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */

            if ($('#webflow :input[type="text"]')[i]['id'] == e.target.id) {
                console.log(value, i, $('#mktoForm_1048 :input[type="text"]')[i]);
                console.log(e.target.value);
                $('#mktoForm_1048 :input[type="text"]')[i].value = e.target.value;
            }
        });
    })

});