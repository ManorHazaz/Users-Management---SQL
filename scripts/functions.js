
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
function getValueFromPromise(promise) 
{
	var array = [];
	promise.then(function(result) 
	{
        Object.keys(result).forEach(function (item) {
            array[item] = (result[item]); // value
        });
	})
	return array;
}


//order and print the data in table
function printDataToTable(obj , fields, selector)
{
	var str;
	str = "<table class='users-data'><tr>";
	fields.forEach(element => {
		str += "<td class='" + element +"'>" + element + " </td>";
	});

	str += "</tr><tr>"

	// console.log(obj);

	// for (const key of obj) 
	// {
	// 	console.log("key");
	// }
	

	// obj.forEach( ( item ) => {

	// 	console.log( " דגש");

	// 	for( const [ k, v ] of Object.entries( item ) )
	// 	{
	// 		console.log( " דגש");
	// 	}
	
	// });

	// obj.forEach(element => {
	// 	console.log(" sada ");
	// 	element.forEach(el => {

	// 		str += "<td>" + el[fields[0]] + " </td>";
	// 	})
	// });

	str += "</tr></table>";

	_(selector).innerHTML = str;
}
