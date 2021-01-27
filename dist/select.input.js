$(document).ready(function () {
    /* 
     Selection based inputs
    */
    $('select').change(function (e) {
        $('select').each(function (i, value) {
            if ($('select')[i]['id'] == e.target.id) {

                $('select')[$('select').length - i];
                console.log(
                    $('select')[$('select').length - i]);

            }
        });
    });

});