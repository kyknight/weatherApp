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
			var icon = data.weather[0].icon;
			var iconUrl = 'http://openweathermap.org/img/w/'+icon+'.png';

			kTemp = data.main.temp;
			var city = data.name;

			//Temperature in F
			fTemp = (kTemp*(9/5)-459.67).toFixed(1);
			//Temperature in C
			cTemp = (kTemp-273).toFixed(1);

			$('#city').html(city);
			$('#weatherType').html("<img src='"+iconUrl+"'>" + weatherType);
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
				$('body').css('background-image', 'url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg)');
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