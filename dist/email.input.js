$(document).ready(function () {
    /* 
     Email based inputs
    */
    $('#webflow :input[type="email"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="email"]').each(function (i, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
            console.log(value, i, $('#mktoForm_1048 :input[type="email"]')[i]);
            if ($('#webflow :input[type="email"]')[i]['id'] == e.target.id) {
                console.log("GOTCHA", document.getElementById($('#mktoForm_1048 :input[type="email"]')[i]['id']), e.target.value);
                document.getElementById($('#mktoForm_1048 :input[type="email"]')[i]['id']).value = e.target.value;
            }
        });
    })

});