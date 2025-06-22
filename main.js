function toggleDetail(e) {
    const target = $(e.target);

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }

    const item = $(target).parents(".about-exp-item");
    const detail = $(item).children(".about-exp-item-detail");
    $(detail).slideToggle(400, function() {
        $(this).toggleClass("show", $(this).is(":visible"));
    });
}

function onFormSubmit(e) {
    e.preventDefault()
    const username = $("#inp_username")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(username).val()) {
        alert("username is required")
    } else if (!$(subject).val()) {
        alert("subject is required")
    } else if (!$(message).val()) {
        alert("Message is Required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}