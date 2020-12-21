
if(!sessionStorage.getItem('online'))
{
    window.location = './';
}

let json = {'action': 'get' , 'table': 'users' };
let action = json['action'];
delete json.action;
let promise = establishRequest(action,json);

let fieldsName = ['Name', 'Email', 'Created-at'];
let fieldsToPrint = ['username', 'useremail', 'usercreatedat'];

printPromiseToTable( promise, fieldsName, fieldsToPrint, '.data-container' );

setInterval( () => { printPromiseToTable( promise, fieldsName, fieldsToPrint, '.data-container' ); }, 3000 );


_('#logout').addEventListener('click', e =>
{
    sessionStorage.clear();
    window.location = './';
});