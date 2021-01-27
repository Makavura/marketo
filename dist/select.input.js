$(document).ready(function () {
    /* 
     Selection based inputs

     Find parent form class name
     Check 
    */
    $('select').change(function (e) {
        $('select').each(function (index, value) {

            if ($('select')[index]['id'] == e.target.id) {

                if (index == ($('select').length / 2)) {
                    return;
                }

                const _ = (($('select').length / 2) + index);
                $('select')[_].options

                for (let i = 0; i < $('select')[_].options.length; i++){
                    console.log($('select')[index].value,($('select')[index].value == $('select')[_].options[i].value), $('select')[_].options[i].value)
                    if($('select')[index].value == $('select')[_].options[i].value){
                        $('select')[_].options[i]['selected'] = true;
                    }
                }
            }

        });
    });

});