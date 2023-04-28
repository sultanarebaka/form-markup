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

// check the length of the password value, if empty return an error.

if(password.length < 8) {
    ("#password").after('<span class="error">Password must be 8 characters long</span>');
    return;
}

    var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;

    var validEmail = regEx.test(email);

    if (!validEmail){
        ("#email").after('<span class="error">Enter a valid email></span>');
        return;
    }

    (".error").remove();

    // we create an alert message
    alert(
        "Name : " +
        name +
        "\n" +
        "DO SOMETHING WITH THE INFORMATION" 
    );
    });
});

