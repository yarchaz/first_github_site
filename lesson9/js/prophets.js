const requestURL ="https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for(let i=0;i<prophets.length; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let dob = document.createElement('p');
            let bp = document.createElement('p');
            h2.textContent=prophets[i].name + ' ' + prophets[i].lastname;
            dob.textContent="Date of Birth:" + " " + prophets[i].birthdate;
            bp.textContent="Birth Place:" + ' ' + prophets[i].birthplace;
            img.setAttribute('src',prophets[i].imageurl);
            img.setAttribute('alt',prophets[i].name + ' ' + prophets[i].lastname + ' ' + prophets[i].order);
            card.appendChild(h2);
            card.appendChild(dob);
            card.appendChild(bp);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }
    });
    