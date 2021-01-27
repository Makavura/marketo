$(document).ready(function () {
    /* 
       
       Refactor script to  listen to submission event of first form
       Text & Numerical Inputs
       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();
        /* 
        Setup programmatic form submission
        */
        // console.log(e.target.parentElement["className"]);
        const _ = e.target.parentElement["className"];
        const _length = _.length;
        const _res = parseInt(_.slice((_length - 1)), 10);
        const _parentFormClassName = _.slice(0, (_length - 1));
        const _mirrorFormClassName = _parentFormClassName + (_res + 1); // mirror form - form to submit values to 
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
        console.log(_mirrorFormClassName);
        _mirrorForm = document.getElementsByClassName(_mirrorFormClassName);
        _mirrorFormData = new FormData(_mirrorForm);
        console.log(_mirrorFormData);

    });

});