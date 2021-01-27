$(document).ready(function () {
    /* 
   Radio based inputs
  */
    $('#webflow :input[type="checkbox"]').change(function (e) {
        console.log($(this));
        $('#webflow :input[type="checkbox"]').each(function (i, value) {
            /* 
            Find index of radio button
            Find the element in mirror form that matches this index
            Mirror selection
            */
                      console.log(value, i, $('#mktoForm_1048 :input[type="radio"]')[i]);
            if ($('#webflow :input[type="checkbox"]')[i]['id'] == e.target.id) {
                if ($(this).is(":checked")) {
                    $('#mktoForm_1048 :input[type="checkbox"]')[i].checked = true;
                }
                else if ($(this).is(":not(:checked)")) {
                    $('#mktoForm_1048 :input[type="checkbox"]')[i].checked = false;
                }
            }
        });
    })
});