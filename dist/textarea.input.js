$(document).ready(function () {


    document.querySelectorAll("textarea").forEach(function (value, index, parent) {
        value.change(function (e) {

            console.warn(e.target);

        });
    })


});