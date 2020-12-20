
if(!sessionStorage.getItem('online'))
{
    window.location = './';
}

window.addEventListener('load', (_e) => 
{

    let json = {'action': 'get' , 'table': 'users' };
    let action = json['action'];
    delete json.action;
    let promise = establishRequest(action,json);

    let fieldsName = ['Name', 'Email', 'Created At'];
    let fieldsToPrint = ['username', 'useremail', 'usercreatedat'];
    

    printPromiseToTable( promise, fieldsName, fieldsToPrint, '.data-container' );

});

_('#logout').addEventListener('click', e =>
{
    sessionStorage.clear();
    window.location = './';
});