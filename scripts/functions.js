const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

// get one element by CSS selector
function _( selector )
{
	return document.querySelector( selector );

}

// get all elements by CSS selector
function __( selector )
{
	return document.querySelectorAll( selector );

}

// transform json into formdata
function jsonToFormData( json )
{
	let formData = new FormData();

	for( let key in json )
	{
		formData.append( key, json[key] );
	}

	return formData;
}

//order and print the data in table
function printPromiseToTable(promise ,fieldsName, fieldsToPrint, selector)
{
	var str;
	var time = new Date().toLocaleTimeString('en-US', 
	{ 	hour12: false, 
		hour: "numeric", 
		minute: "numeric",
		second: "numeric"
	});

	str = "<table class='users-data'><thead><tr>";
	fieldsName.forEach(element => {
		str += "<td class='" + element.toLowerCase() +"'>" + element + " </td>";
	});


	str += "</tr><tr><td class='last-update' colspan='3'>Last update: " + time + "</td></tr></thead><tbody><tr>";

	promise.then(function(result)
    {
        result.forEach( ( item ) => {

			str += "<tr>";

            for( const [ key, value ] of Object.entries( item ) )
            {
				if(fieldsToPrint.includes(key))
				{
					str += "<td>" + value + "</td>";
				}
			}

			str += "</tr>";;
			
		});
		
		str += "</tbody></table>";

		_(selector).innerHTML = str;
    });
}

//email form validate
function validateEmail(email) 
{
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

//data exist in DB
async function isExist( field , data )
{
	let json = {'action': 'isExist' , 'table': 'users' ,'field': field , 'data': data };
    let action = json['action'];
    delete json.action;
	let promise = establishRequest(action,json);
	let flag;
	
	await promise.then(function(result)
    {
		flag = (result['status'] == '302');
	});
	return flag;
}

// checking for special chars
function specialChars(data)
{
	for (var i = 0; i < data.length; i++) 
	{
		if (iChars.indexOf(data.charAt(i)) != -1) 
		{
			return false;
		}
	}
}