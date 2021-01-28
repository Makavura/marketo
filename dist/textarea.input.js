export default function MirrorTextAreaInputs() {

    document.querySelectorAll("textarea").forEach(function (value, index, parent) {

        if (index == ((document.querySelectorAll("textarea").length / 2))) {
            return true;
        }

        document.querySelectorAll("textarea")[`${(document.querySelectorAll("textarea").length / 2)}`].value = document.querySelectorAll("textarea")[index].value;

    })
    
};
