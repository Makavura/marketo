document.querySelectorAll("textarea").forEach(function(value, index, parent){
    value.onchange(function(e){

        console.warn(e.target);

    });
})