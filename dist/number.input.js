$(document).ready(function () {
    /* 
     Numerical based inputs
    */
    $('#webflow :input[type="number"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="number"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
           console.log(value, i, $('#mktoForm_1048 :input[type="email"]')[i]);
            if ($('#webflow :input[type="number"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="number"]')[i].val(e.target.value);
            }
        });
    })

});