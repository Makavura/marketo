$(document).ready(function () {
    /* 
       
       Submission event of first form

       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();
       
        let _FormData = new FormData($('#mktoForm_1048'));
        console.log(_FormData);

    });

});