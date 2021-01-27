$(document).ready(function () {
    /* 
     Selection based inputs

     Find parent form class name
     Check 
    */
    $('#webflow :select').change(function (e) {
        $('select').each(function (i, value) {
            console.log(i, value, e.target.id, $('select')[i]['id'], $('select').closest('form'));
            if ($('select')[i]['id'] == e.target.id) {

                $('select')[$('select').length - i];
                console.log(
                    $('select')[$('select').length - i]);
            }
        });
    });

});