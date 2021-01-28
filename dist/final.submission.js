$(document).ready(function () {
    /* 
       
       Submission event of first form

       */
    $("#webflow-submit").click(function (e) {
        e.preventDefault();
       
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