window.addEventListener('load', (_e) => 
{

	// let params = new FormData();
	// params.append('action', 'insert');
	// params.append('table', 'users');
	// params.append('username', 'manor111');
	// params.append('userpassword', 'val3');
	// params.append('useremail', 'manor111');
	// params.append('userip', '127.1.1.1');

	// let params = new FormData();
	// params.append('action', 'delete');
	// params.append('table', 'users');
	// params.append('field', 'id');
	// params.append('data', '3');

	// let params = new FormData();
	// params.append('action', 'get');
	// params.append('table', 'users');
	// params.append('field', 'id');
	// params.append('data', '2');

	let params = new FormData();
	params.append('action', 'update');
	params.append('table', 'users');
	params.append('field', 'id');
	params.append('data', '7');
	params.append('username', 'dodo');
	params.append('userpassword', 'val3');
	params.append('useremail', 'dodo');
	params.append('userip', '127.1.1.1');

	fetchRequest('api.php',params);

});

async function fetchRequest( url, params)
{
	let response = await fetch(url, { method: 'POST', body: params });

	console.log(response.status); 
	console.log(response.statusText); 

	if (response.status === 200) {
		let data = await response.text();
		console.log(data);
		// alert with TOAST good
	}

	if (response.status === 400) {
		let data = await response.text();
		// alert with TOAST bad
	}

	if (response.status === 500) {
		let data = await response.text();
		// alert with TOAST server error
	}

	console.log(response);
}

async function renderUsers() {
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

// renderUsers();