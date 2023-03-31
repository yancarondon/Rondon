var $ = function (id) {
    return document.getElementById(id);
}

function validate() {

    if ($("email").value == "") {
        $("email_error").innerHTML = "Please fill out this field.";

    } else {
        $("email_error").innerHTML = "";
    }

    if ($("telephone").value == "") {
        $("telephone_error").innerHTML = "Please fill out this field.";

    } else {
        $("telephone_error").innerHTML = "";
    }

    if ($("comments").value == "") {
        $("comments_error").innerHTML = "Please fill out this field.";

    } else {
        $("comments_error").innerHTML = "";
    }

    if ($("email").value != "" && $("telephone").value != "" && $("comments").value != "") {

        $("submission").innerHTML = "Your quote has been successfully submited. Our team will contact you within 1 business day.";
    }


}

