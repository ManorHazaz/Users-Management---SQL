// register button action
window.addEventListener('submit', async (e) =>
{
    e.preventDefault();

    // values from the form
    let email             = _( '#email' );
    let userName          = _( '#user-name' );
    let password          = _( '#password' );
    let passwordConfirm   = _( '#password-confirm' );

    email = email.value.trim();
    userName = userName.value.trim();
    password = password.value.trim();
    passwordConfirm = passwordConfirm.value.trim();

    // validate email
    if(!validateEmail(email))
    {
        creatToast(3000, 'error', 'please correct your email to the correct form' );
        return;
    }

    // if username exist in DB
    if(await isExist('username',userName))
    {
        creatToast(3000, 'error', 'The user name is allready exist' );
        return;
    }

    // if email exist in DB
    if(await isExist('useremail',email))
    {
        creatToast(3000, 'error', 'The email is allready exist' );
        return;
    }

    if( password != passwordConfirm )
    {
        creatToast(3000, 'error', 'The passwords not match' );
        return;
    }

    if(specialChars(email))
    {
        creatToast(3000, 'error', 'Special Chars are not allowd in email' );
        return;
    }

    if(specialChars(userName))
    {
        creatToast(3000, 'error', 'Special Chars are not allowd in user name' );
        return;
    }

    if(specialChars(password))
    {
        creatToast(3000, 'error', 'Special Chars are not allowd in password' );
        return;
    }
    
    // values for fetch request
    let json = {'action': 'insert' , 'table': 'users' , 'username': userName , 'userpassword': password , 'useremail': email };
    let action = json['action'];
    delete json.action;

    // commit fetch request
    let promise = establishRequest(action,json);

    // check the response from the fetch request - if approved redirect
    promise.then(function(result)
    {
        if(result == 'record updated successfully')
        {
            creatToast( 5000, 'success', 'Created successfully! You are being redirected');
            setTimeout( () => { window.location = './'; }, 3000 );
        }
    });

});