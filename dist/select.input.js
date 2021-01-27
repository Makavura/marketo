$(document).ready(function () {
    /* 
     Selection based inputs
    */
    $('#webflow :input[type="select"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="select"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
           console.log(value, i, $('#mktoForm_1048 :input[type="select"]')[i]);
            if ($('#webflow :input[type="select"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="select"]')[i].val(e.target.value);
            }
        });
    })

});