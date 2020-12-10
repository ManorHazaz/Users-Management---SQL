window.addEventListener('load', (_e) => 
{
    let json = {'action': 'get' , 'table': 'users' };
    let action = json['action'];
    delete json.action;
    // renderData(establishRequest(action,json), '.data-container' );
    let promise = establishRequest(action,json);
    let array = getValueFromPromise(promise);
    let fields = ['id', 'username', 'useremail', 'usercreatedat'];
    
    printDataToTable(array , fields, '.data-container');

    
    // console.log(establishRequest(action,json));
});