window.addEventListener('load', (_e) => {
    
    fetchAddNewUser();

  });

  function fetchAddNewUser()
  {
    let params = new FormData();
    params.append('action', 'openConnection');

    fetch('api.php', {
        method: 'POST',
        body: params
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(e => console.error('error:' + e))

    // let params = new FormData();
    // params.append('action', 'register');
    // params.append('table', 'users');
    // params.append('username', 'manor111');
    // params.append('userpassword', 'val3');
    // params.append('useremail', 'manor111');
    // params.append('userip', '127.1.1.1');

    // fetch('api.php', {
    //     method: 'POST',
    //     body: params
    // })
    // .then(res => res.text())
    // .then(res => console.log(res))
    // .catch(e => console.log('error:' + e))
  }