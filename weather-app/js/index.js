$(document).ready(function(){
	var lat;
	var long;

	$.getJSON('http://ip-api.com/json/?callback=?', function(dataAlt){
		lat = dataAlt.lat;
		long = dataAlt.lon;
		var apiKey = 'db7f3c797e416d658e9c3441f3274add';
		var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+apiKey;

		console.log(api);//not logging

		$.getJSON(api, function(data){
			var fTemp;
			var cTemp;
			var kTemp;

			var tempSwap = true;
				// JSON call for weather API
			var weatherType = data.weather[0].description;
			kTemp = data.main.temp;
			var city = data.name;

			//Temperature in F
			fTemp = (kTemp*(9/5)-459.67).toFixed(1);
			//Temperature in C
			cTemp = (kTemp-273).toFixed(1);

			$('#city').html(city);
			$('#weatherType').html(weatherType);
			$('#fTemp').html(fTemp + ' &#8457;');
				//click to change the temp from F to C (visa-versa)
			$('#fTemp').click(function(){
				if(tempSwap===false){
					$('#fTemp').html(fTemp + ' &#8457;');
					tempSwap = true;
				} else {
					$('#fTemp').html(cTemp + ' &#8451;');
					tempSwap = false;
				}
			});

			if(fTemp>100){
				$('body').css('background-image', 'url(https://s-media-cache-ak0.pinimg.com/originals/d5/78/b3/d578b36f9040efb1ccbce6794d4f0a84.jpg)');
			} else if (fTemp>80){
				$('body').css('background-image', 'url(https://static.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg)');
			} else if (fTemp>60){
				$('body').css('background-image', 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN07Htp7UpJmzmNF_gARod6P156b4rIRNCeAIf_8c61JqdGKtH)');
			} else if (fTemp>50){
				$('body').css('background-image', 'url(http://cdn.wallpapersafari.com/34/40/6RPbdp.jpg)');
			} else if (fTemp>32){
				$('body').css('background-image', 'url(http://up.picr.de/27496311tn.jpg)');
			} else if (fTemp<32){
				$('body').css('background-image', 'url(http://cdn.wallpapersafari.com/42/75/LmYl5u.jpg)');
			}

		});
	});
});