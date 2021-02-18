function connectGit() {
    fetch('https://github.itu.dk/api/v3/repos/hecl/Chatz', { 
        headers: {
             'Authorization': "token c95b98ee8799e41a5c2aa8748f3240f0330492c9",
             'Accept' : 'application/vnd.github.v3+json'
         }})
        .then(response => response.json())
        .then( data => {console.log(data)})
        .catch( error => console.error(error)); 
}

function testForFileUpload() {
    const data = { username: 'example' };

    fetch('https://github.itu.dk/api/v3/repos/hecl/contents/test.txt', {
    method: 'PUT', //POST?
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "token c95b98ee8799e41a5c2aa8748f3240f0330492c9"
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    }
