$(document).ready(function () {
    /* 
     Selection based inputs
    */
    $('select').change(function (e) {
        $('select').each(function (i, value) {
            if ($('select')[i]['id'] == e.target.id) {
                let mirrorIndex = $('select').length - i;
                $('select')[mirrorIndex].value  = e.target.value;
            }
        });
    });

});