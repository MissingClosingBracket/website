function connectGit() {
    fetch('https://github.itu.dk/api/v3/repos/hecl/Chatz/commits', { 
        headers: {
             'Authorization': "token c95b98ee8799e41a5c2aa8748f3240f0330492c9",
             'Accept' : 'application/vnd.github.v3+json'
         }})
        .then(response => response.json())
        .then( data => {console.log(data)})
        .catch( error => console.error(error));
}
