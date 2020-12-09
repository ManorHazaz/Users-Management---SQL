
// send the right method to the fetch request 
function establishRequest(action , data)
{
	switch (action) {
		case 'insert':
			fetchRequest( 'POST', action, data ).then(res => {console.log(res);});
		break;

		case 'delete':
			fetchRequest( 'POST', action, data ).then(res => {console.log(res);});
		break;

		case 'get':
			fetchRequest( 'GET', action, data ).then(res => {console.log(res);});
			
		break;

		case 'update':
			fetchRequest( 'POST', action, data ).then(res => {console.log(res);});
		break;
	
		default:
			console.log('something went wrong');
			break;
	}
}

// fetch request to the API
async function fetchRequest( method, action, data)
{
	const API_URL = './API/api.php';
	let url = `${ API_URL }?action=${ action }`;
    let options = { 

		method, 
		mode: 'cors', 
		redirect: 'follow'

	};

	if( method === 'GET' )
	{
		const queryString = Object.keys( data ).map( key => ( key + '=' + data[key] ) ).join( '&' );
		url += queryString ? '&' + queryString : '';
	}

	// other methods, add 'data' as body
	else
	{
		options.body = jsonToFormData( data );
	}


	return fetch( url, options ).then( res => res.json());
	
}