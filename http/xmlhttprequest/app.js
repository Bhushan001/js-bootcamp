const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('IT WORKED!!!');
    const data = JSON.parse(this.responseText);
    for (let planet of data.results) {
        console.log(planet.name);
    }
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://od-api-demo.oxforddictionaries.com/api/v1/domains/es');
firstReq.send();
console.log('Request Sent!');