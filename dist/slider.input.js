$(function () {
    $("#slider-1").slider({
        min: 0,
        max: 100,
        slide: function (event, ui) {
            console.log(ui.value, ui);
        }
    });
});