(document).ready(function () {

    ("#signup_form").submit(function(e) {
        e.preventDefault(); 


        var name =("#name").val();
        var email = ("#email").val();
        var password = ("#password").val();

        (".error").remove();
    }
    )
})


if (name.length < 1) {
    ("#name").after(
        '<span class="error">Name is required</span>'
    );
    return;
}

// check the email length, return an error if the field is empty.
if (email.length < 1) {
    ("#email").after('<span class="error">Email is required</span>');
    return;

}
else{
    
}