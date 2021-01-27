$(document).ready(function () {
    /* 
     Range based inputs
    */
    $('#webflow :input[type="range"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="range"]').each(function (i, value) {
            /* 
            Find index of range element
            Find the element in mirror form that matches this index
            Mirror selection
            */
            if ($('#webflow :input[type="range"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="range"]')[i].val(e.target.value);
            }
        });
    })
});