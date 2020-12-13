window.addEventListener('submit', (e) =>
{
    e.preventDefault();

    let userName = _( '#user-name' );
    let password = _( '#password' );

    userName = userName.value.trim();
    password = password.value.trim();
   
    let json = {'action': 'login' , 'table': 'users' ,'username': userName , 'password': password };
    let action = json['action'];
    delete json.action;
    let promise = establishRequest(action,json);

    promise.then(function(result)
    {
        if(result['status'] == '200')
        {
            creatToast( 3000, 'success', 'Login successfully! You are being redirected');

            setTimeout( () => { window.location = './data.html'; }, 3000 );
        }
        else
        {
            creatToast( 5000, 'error', 'Login error! User name or password is wrong');
        }
    });
});