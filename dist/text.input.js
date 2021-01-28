$(document).ready(function () {
    /* 
     Text based inputs
    */
    $('#webflow :input[type="text"]').keyup(function (e) {
        console.log($(this));

        /* 
        For filtering custom setups e.g date pickers
        Set type in data attribute or in id
        e.g data-type="date-picker"
        */

        $('#webflow :input[type="text"]').each(function (index, value) {
            /* 
            Find index of input element
            Find the element in mirror form that matches this index
            Mirror selection
            */
            /* 
            If date is included in the id tag of the current element
            All webflow based date pickers should have an id of date-...
            Since they are classified as texts and dynamically rendered as date pickers via jquery ui
            */
            if ($('#webflow :input[type="text"]')[index]['id'].includes("date")) {
                $('#mktoForm_1048 :input[type="date"]').each(function (count, value) {
                    /* 
                    In event of multiple date pickers
                    */

                    if (document.querySelectorAll('[id^=date]').length == (count + 1)) {
                        $('#mktoForm_1048 :input[type="text"]')[count].value = e.target.value;
                    }


                });
            } else {
                /* 
                Does not include date in id
                Matches current selection
                */

                $('#mktoForm_1048 :input[type="text"]').each(function (count, value) {
                    /* 
                    In event of multiple date pickers
                    */

                    if ($('#webflow :input[type="text"]')[index]['id'] == e.target.id) {
                        $('#mktoForm_1048 :input[type="text"]')[count].value = e.target.value;
                        return true;
                    }
                });
            }


        });
    })

});