$(document).ready(function () {
    /* 
     Selection based inputs

     Find parent form class name
     Check 
    */
    $('select').change(function (e) {
        $('select').each(function (i, value) {

            // console.log(i, value, e.target.id, $('select')[i]['id'], $('select').closest('form'));
            if ($('select')[i]['id'] == e.target.id) {

                // console.log($('select')[i]['id'], e.target.id, $('select').length - (i +1));
                // console.log($('select')[`${$('select').length - (1 +i)}`]);
                
                if (i == ($('select').length / 2)) {
                    return;
                }

                const _ = (($('select').length / 2) + i);
                // console.log(i);
                // console.log(_, $('select')[_].value, $('select')[i].value)


                $('select')[_].options

                for (var i = 0; i < $('select')[_].options.length; i++){
                    console.log($('select')[_].options[i]);
                }
                // $(`${$('select')[_]['id']}`)
                // console.log($('select')[_]['option']);
            }

        });
    });

});