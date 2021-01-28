$(document).ready(function () {
    /* 
     Tel based inputs
    */
    document.getElementById("Website-2").setAttribute('type', 'url');

    $('#webflow :input[type="url"]').change(function (e) {
        $('#webflow :input[type="url"]').each(function (i, value) {
            if ($('#webflow :input[type="url"]')[i]['id'] == e.target.id) {
                $('#mktoForm_1048 :input[type="url"]').each(function (index, val) {
                    if (index = i) {
                        $('#mktoForm_1048 :input[type="url"]')[index].value = e.target.value;
                    }
                })

            }
        });
    })

});