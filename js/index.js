console.log("hakuna matata");
console.log("69");

let request = require("request");
let apiKey = 'bea6972840a72f62be17686103c7aed4';
let city = 'Nairobi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function(err, response, body) {
    if (err) {
    console.log("error:", error);
    } else {
    console.log("body:", body);
    }
});


