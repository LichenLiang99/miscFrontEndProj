function delayedRequest(url) {
    setTimeout(function() {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }, 2000);
}

let url = 'https://jsonplaceholder.typicode.com/users/2';
let url2 = 'https://jsonplaceholder.typicode.com/users/3';
let url3 = "";

delayedRequest(url);
delayedRequest(url2);
// delayedRequest(url3); //error

