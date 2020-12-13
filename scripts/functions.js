
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
	str = "<table class='users-data'><tr>";
	fieldsName.forEach(element => {
		str += "<td class='" + element +"'>" + element + " </td>";
	});

	str += "</tr><tr>";

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
		
		str += "</tr></table>";

		_(selector).innerHTML = str;
    });
}

//email form validate
function validateEmail(email) 
{
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

//username exist in DB
function userNameAllreadyExist(username)
{
	// script here
	return false;
}