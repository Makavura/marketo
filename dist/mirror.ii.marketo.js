MktoForms2.loadForm("", "", 1048, function (form) {
    // form.submit();
    // form.validate();
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].type == "submit" && inputs[index]["form"]["id"] !== form.getFormElem()[0]["id"]) {
            $(inputs[index]).click(function (e) {
                e.preventDefault();
                form.validate();
            })
        }
    }
    form.onSubmit((x) => {
        console.log(x);
        const submissionErrorListener = setInterval(function () {
            if (document.getElementsByClassName("mktoErrorMsg").length === 1) {
                document.querySelectorAll('[marketo-status="error"]').forEach(function (value) {
                    value.style.display = 'block';
                    stopSubmissionErrorListener();
                });
            }
        }, 100);

        function stopSubmissionErrorListener() {
            clearInterval(submissionErrorListener);
        }

    })
    form.onSuccess(function (values, followUpUrl) {
        var formElement = form.getFormElem()[0];
        formElement.reset();
        const formtoberesetid = localStorage.getItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
        document.getElementById(formtoberesetid).reset();
        localStorage.removeItem("FORMTOBERESETONSUCCESSOFSUBMISSION");
        document.querySelectorAll('.w-form-done').forEach(function (el) {
            el.style.display = 'block';
        });
        return false;
    });
});