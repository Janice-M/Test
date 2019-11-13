console.log ('hakuna matata');

function weatherBalloon( cityID ) {
    var key = '{bea6972840a72f62be17686103c7aed4}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBallon( 6167865 );
  }