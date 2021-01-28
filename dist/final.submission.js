import MirrorTextAreaInputs from './textarea.input.js';

$(document).ready(function () {
    /* 
       
       Submission event of first form

       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();
       
        MirrorTextAreaInputs();
        // let _FormData = new FormData($('#mktoForm_1048'));
        // console.log(_FormData);

    });

});