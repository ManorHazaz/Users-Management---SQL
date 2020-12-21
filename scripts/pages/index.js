
// login button action
window.addEventListener('submit', (e) =>
{
    e.preventDefault();

    // values from the form
    let userName = _( '#user-name' );
    let password = _( '#password' );

    userName = userName.value.trim();
    password = password.value.trim();
   
    // values for fetch request
    let json = {'action': 'login' , 'table': 'users' ,'username': userName , 'password': password };
    let action = json['action'];
    delete json.action;

    // commit fetch request
    let promise = establishRequest(action,json);

    // check the response from the fetch request
    promise.then(function(result)
    {
        if(result['status'] == '200')
        {
            creatToast( 3000, 'success', 'Login successfully! You are being redirected');
            sessionStorage.setItem('online', userName);

            setTimeout( () => { window.location = './data.html'; }, 3000 );
        }
        else
        {
            creatToast( 5000, 'error', 'Login error! User name or password is wrong');
        }
    });
});