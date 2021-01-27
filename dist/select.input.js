$(document).ready(function () {
    /* 
     Selection based inputs
    */
    $('select').change(function (e) {
        $('select').each(function (i, value) {
            console.log(i, value, e.target.id, $('select')[i]['id']);
            if ($('select')[i]['id'] == e.target.id) {

                $('select')[$('select').length - i];
                console.log(
                    $('select')[$('select').length - i]);

            }
        });
    });

});