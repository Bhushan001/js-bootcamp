const players = ['Sachin', 'Dhoni', 'Virat'];
const [batsman, captain, aggressive] = players;
console.log(batsman);
console.log(captain);
console.log(aggressive);

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, status, contentType]) {
    console.log(status);
}
parseResponse(response);