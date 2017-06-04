$(document).ready(function(){
	var lat;
	var long;

	$.getJSON('http://ip-api.com/json/?callback=?', function(dataAlt){
		lat = dataAlt.lat;
		long = dataAlt.lon;
		var apiKey = 'db7f3c797e416d658e9c3441f3274add';
		var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+apiKey;

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
				$('body').css('background-image', 'url(data:image/jpeg;base64,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)');
			}  else if (fTemp>70){
				$('body').css('background-image', 'url(http://orig12.deviantart.net/1324/f/2011/148/8/5/dutch_summer_sky_by_gerardnienhuis-d3hfb8j.jpg)');
			} else if (fTemp>32){
				$('body').css('background-image', 'url(http://ticknerscanoe.com/files/2012/08/fall-leaves-water.jpg)');
			} else if (fTemp<32){
				$('body').css('background-image', 'url(http://cdn.wallpapersafari.com/42/75/LmYl5u.jpg)');
			}

		});
	});
});