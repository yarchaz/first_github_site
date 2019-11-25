const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=b2012ab1c1fd703c93375ed8b42602ef";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var temp = Math.round(jsObject.main.temp);
        var windS = jsObject.wind.speed;
        var windC = windChill(temp,windS);
        document.getElementById('cTemp').textContent= temp;
        document.getElementById('cWindS').textContent = windS;
        document.getElementById('humid').textContent = jsObject.main.humidity + '%';
        document.getElementById('type').textContent= jsObject.weather[0].description;
        document.getElementById('cWindC').textContent = windC;
    });
