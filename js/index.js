$(document).ready(function(){

	$('#submitWeather').click(function(){

		var city = $("#city").val();

		if (city != ''){

			$.ajax({

				url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=bea6972840a72f62be17686103c7aed4",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);

					$("#show").html(widget);

					$("#city").val('');
				}
			});

		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});

function show(data) {
	return "<h3 style=  ><strong>Weather</strong>: "+ data.main.temp +"</h3>"
}