$(function () {
    /* 
    
    Create a div with the id slider-1

    Add the following just before the closing body tag
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
         $(function() {
            $( "#slider-1" ).slider();
         });
    </script>

    */
    $("#slider-1").slider({
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $('#mktoForm_1048 :input[type="range"]')[0].value = ui.value;
        }
    });
});