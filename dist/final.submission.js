$(document).ready(function () {
    /* 
       Submission event of first form
       */
    $("#webflow-submit").click(function (e) {

        $("#mktoForm_1048 :input[type='date']")[0]["value"] = $('#datepicker').val();
        $('#mktoForm_1048 :input[type="url"]')[0].value = $('#webflow :input[type="url"]')[0].value;

        e.preventDefault();

        /* 
         Get all inputs from first form
         */

        let WFInputs = $("#webflow :input");

        for (let i = 0; i < WFInputs.length; i++) {

            if (WFInputs[i]["type"] == 'text') {
                $('#webflow :input[type="text"]').each(function (index, value) {
                    if ($('#webflow :input[type="text"]')[index]['id'] == value["id"]) {
                        console.log(index);
                        if(index == 3){
                        }
                        $('#mktoForm_1048 :input[type="text"]')[index].value = value["value"];
                    }
                });
            } else if (WFInputs[i]["type"] == 'number') {
                $('#webflow :input[type="number"]').each(function (index, value) {
                    if ($('#webflow :input[type="number"]')[index]['id'] == value["id"]) {
                        $('#mktoForm_1048 :input[type="number"]')[index].value = value["value"];
                    }
                });

            }

        }

        document.querySelectorAll("textarea").forEach(function (value, index, parent) {
            if (index == ((document.querySelectorAll("textarea").length / 2))) {
                return true;
            }
            document.querySelectorAll("textarea")[`${(document.querySelectorAll("textarea").length / 2)}`].value = document.querySelectorAll("textarea")[index].value;
        })

        $('#mktoForm_1048').submit();
    });

});