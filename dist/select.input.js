$(document).ready(function () {
    /* 
     Selection based inputs
    */
    $('select').change(function (e) {
        // console.log($(this), e.target.value);

        let _ = $('select').length;

        let rest = _/2;


        $('select').each(function (i, value) {
            if($('select')[i]['id'] == e.target.id){
            console.log(i, value);
            }
        });

    });

});