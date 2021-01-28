$(document).ready(function () {
    /* 
       
       Submission event of first form

       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();

        /* 
  Get all inputs from first form
  */

        let initialFormInputs = $("#webflow :input");
        let mirrorFormInputs = $("#mktoForm_1048 :input");


        for (let i = 0; i < initialFormInputs.length; i++) {
            /* 
            Access their inner values
            */
            console.log("BISCUITS");
            console.log($(`#${initialFormInputs[i]["id"]}`).attr('type'));
            console.log($(`#${initialFormInputs[i]["id"]}`));
            if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'email') {
                /* 
                Set email values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'text') {
                /* 
                Set text values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'password') {
                /* 
                Set password values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            } else if ($(`#${initialFormInputs[i]["id"]}`).attr('type') == 'number') {
                /* 
                Set number values
                */
                $(`#${mirrorFormInputs[i]["id"]}`).attr("value", $(`#${webflow[i]["id"]}`).val());
            }

        }
        console.log(mirrorFormInputs);
        console.log(initialFormInputs);

        _mirrorForm = document.getElementsByClassName(_mirrorFormClassName);
        _mirrorFormData = new FormData(_mirrorForm);
        console.log(_mirrorFormData);

        document.querySelectorAll("textarea").forEach(function (value, index, parent) {

            if (index == ((document.querySelectorAll("textarea").length / 2))) {
                return true;
            }

            document.querySelectorAll("textarea")[`${(document.querySelectorAll("textarea").length / 2)}`].value = document.querySelectorAll("textarea")[index].value;

        })
        // let _FormData = new FormData($('#mktoForm_1048'));
        // console.log(_FormData);

    });

});