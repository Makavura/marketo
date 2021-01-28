$(document).ready(function () {
    /* 
       Submission event of first form
       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();

        /* 
         Get all inputs from first form
         */

        let WFInputs = $("#webflow :input");
        let MFInputs = $("#mktoForm_1048 :input");

        for (let i = 0; i < WFInputs.length; i++) {

            if (WFInputs[i]["type"] == 'text') {
                MFInputs[i]["value"] = WFInputs[i]["value"];
            } else if (WFInputs[i]["type"] == 'number') {
                MFInputs[i]["value"] = WFInputs[i]["value"];
            } else if (WFInputs[i]["type"] == 'url') {
                MFInputs[i]["value"] = WFInputs[i]["value"];
            } 
    
        }

        $("#mktoForm_1048 :input[type='date']")[0]["value"] = $('#datepicker').val();

        document.querySelectorAll("textarea").forEach(function (value, index, parent) {
            if (index == ((document.querySelectorAll("textarea").length / 2))) {
                return true;
            }
            document.querySelectorAll("textarea")[`${(document.querySelectorAll("textarea").length / 2)}`].value = document.querySelectorAll("textarea")[index].value;
        })

        // console.warn($('#mktoForm_1048'));
    });

});