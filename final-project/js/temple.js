const requestURL ="https://yarchaz.github.io/final-project/json/temples.json";
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        for(let i=0; i<temples.length; i++){
          let card = document.createElement('section');
          let temple = document.createElement('h3');
          let tcontact= document.createElement('h5');
          let photo = document.createElement('img');
          let dedicated = document.createElement('h4');
          let address = document.createElement('p');
          let phone = document.createElement('p');
          let email = document.createElement('p');
          let tservice = document.createElement('h5');
          let services = document.createElement('div');
          let tSchedule = document.createElement('h5');
          let schedule = document.createElement('p');
          let tclosures = document.createElement('h5');
          let closures = document.createElement('div');
          let tmain = document.createElement('div');
          let h3img = document.createElement('div');
          temple.textContent = temples[i].name;
          photo.setAttribute('src','images/'+temples[i].photo);
          photo.setAttribute('alt',temples[i].name + " image");
          dedicated.textContent = "Dedicated" + " " + temples[i].dedicated;
          address.textContent = temples[i].address;
          phone.textContent= temples[i].phone;
          email.textContent = temples[i].email;
          tcontact.textContent="Temple Contact Info";
          tservice.textContent="Services";
          tSchedule.textContent="Endowment Schedule";
          tclosures.textContent="Temple Closures";

          for (x=0;x<temples[i].services.length; x++){
              let service = document.createElement('p');
              service.textContent=temples[i].services[x];
              services.appendChild(service); 
          }
          schedule.textContent = temples[i].eSchedule;

          for (z=0;z<temples[i].tClosures.length; z++){
              let close = document.createElement("p");
              close.textContent = temples[i].tClosures[z];
              closures.appendChild(close);
          }
          h3img.appendChild(temple);
          h3img.appendChild(photo);
          tmain.appendChild(dedicated);
          tmain.appendChild(tcontact);
          tmain.appendChild(address);
          tmain.appendChild(phone);
          tmain.appendChild(email);
          tmain.appendChild(tservice);
          tmain.appendChild(services)
          tmain.appendChild(tSchedule);
          tmain.appendChild(schedule);
          tmain.appendChild(tclosures);
          tmain.appendChild(closures);
          card.appendChild(h3img);
          card.appendChild(tmain);
          document.querySelector('div.templeCard').appendChild(card);
          const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip="+temples[i].zip +"&units=imperial&APPID=b2012ab1c1fd703c93375ed8b42602ef";
          fetch(apiURL)
              .then((response) => response.json())
              .then((jsObject) => {
                  console.log(jsObject);
                  var temp = Math.round(jsObject.main.temp);
                  var windS = jsObject.wind.speed;
                  var windC = windChill(temp,windS);
                  var desc=  jsObject.weather[0].description;
                  let weather = document.createElement("div");
                  weather.setAttribute('class','weather');
                  let cweather = document.createElement("h5");
                  let wdesc = document.createElement('p');
                  let temperature = document.createElement('p');
                  let windspead = document.createElement('p');
                  let chillwind = document.createElement("p");
                  wdesc.textContent="Condition: " + desc;
                  temperature.textContent="Temperature:" + " " + temp ;
                  windspead.textContent="Wind Speed:" + " " + windS;
                  chillwind.textContent="Wind Chill: " + windC;
                  cweather.textContent="Current Weather";
                  weather.appendChild(cweather);
                  weather.appendChild(wdesc);
                  weather.appendChild(temperature);
                  weather.appendChild(windspead);
                  weather.appendChild(chillwind);
                  card.appendChild(weather);
                  document.querySelector('div.templeCard').appendChild(card);

              });
        }
       
    });
    