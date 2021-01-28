$(document).ready(function () {
    /* 
     Numerical based inputs
    */
   document.getElementById("leadScore__pc").setAttribute('type', 'number');

    $('#webflow :input[type="number"]').change(function (e) {
        $('#webflow :input[type="number"]').each(function (i, value) {
           
            if ($('#webflow :input[type="number"]')[i]['id'] == e.target.id) {
                    $('#mktoForm_1048 :input[type="number"]')[i].value = e.target.value;
            }
        });
    });
});