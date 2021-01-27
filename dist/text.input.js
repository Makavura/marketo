$(document).ready(function () {
    /* 
     Text based inputs
    */
    $('#webflow :input[type="text"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="text"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
           console.log(value, i, $('#mktoForm_1048 :input[type="text"]')[i]);
            if ($('#webflow :input[type="text"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="text"]')[i].val(e.target.value);
            }
        });
    })

});