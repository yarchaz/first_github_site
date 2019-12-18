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
          let photo = document.createElement('img');
          let dedicated = document.createElement('h4');
          let address = document.createElement('p');
          let phone = document.createElement('p');
          let email = document.createElement('p');
          let services = document.createElement('div');
          let schedule = document.createElement('p');
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
          tmain.appendChild(address);
          tmain.appendChild(phone);
          tmain.appendChild(email);
          tmain.appendChild(services)
          tmain.appendChild(schedule);
          tmain.appendChild(closures);
          card.appendChild(h3img);
          card.appendChild(tmain);
          document.querySelector('div.templeCard').appendChild(card);
        }
    });