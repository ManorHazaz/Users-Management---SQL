
window.addEventListener('submit', (e) =>
{
    e.preventDefault();

    let email             = _( '#email' );
    let userName          = _( '#user-name' );
    let password          = _( '#password' );
    let passwordConfirm   = _( '#password-confirm' );

    email = email.value.trim();
    userName = userName.value.trim();
    password = password.value.trim();
    passwordConfirm = passwordConfirm.value.trim();

    if(!validateEmail(email))
    {
        creatToast(3000, 'error', 'please correct your email to the correct form' );
        return;
    }

    if(userNameAllreadyExist(userName))
    {
        creatToast(3000, 'error', 'The userName is allready exist' );
        return;
    }

    let json = {'action': 'insert' , 'table': 'users' , 'username': userName , 'userpassword': password , 'useremail': email };
    let action = json['action'];
    delete json.action;
    let promise = establishRequest(action,json);

    promise.then(function(result)
    {
        console.log(result);
        if(result == 'record updated successfully')
        {
            creatToast( 5000, 'success', 'Created successfully! You are being redirected');

            setTimeout( () => { window.location = './'; }, 5000 );
        }
    });

});