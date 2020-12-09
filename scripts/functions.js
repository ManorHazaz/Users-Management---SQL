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

//order the data from the fetch request
async function renderdata() {
	let users = await getUsers();
	let html = '';
	users.forEach(user => {
		let htmlSegment = `<div class="user">
							<img src="${user.profileURL}" >
							<h2>${user.firstName} ${user.lastName}</h2>
							<div class="email"><a href="email:${user.email}">${user.email}</a></div>
						</div>`;

		html += htmlSegment;
	});

	let container = document.querySelector('.container');
	container.innerHTML = html;
}
