var $ = function (id){
    return document.getElementById(id);
}

var submitEmail = function (){
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var commentId = document.getElementById("commentId").value;
    var isValid = true;

    
    if (email == ""){
        $("email_error").firstChild.nodeValue = "Please fill out this field."
        isValid = false;
    }else {
        $("email_error").firstChild.nodeValue = "";
    }

    if (telephone == ""){
        $("telephone_error").firstChild.nodeValue = "Please fill out this field."
        isValid = false;
    }else {
        $("telephone_error").firstChild.nodeValue = "";
    }

    if (commentId == ""){
        $("commentId_error").firstChild.nodeValue = "Please fill out this field."
        isValid = false;
    }else {
        $("commentId_error").firstChild.nodeValue = "";
    }

    if (isValid) {
        document.getElementById("submission").innerHTML = "Your quote has been successfully submited. Our team will contact you within 1 business day."
    $("submitQuote").onclick = submitEmail;
    }
     
}

