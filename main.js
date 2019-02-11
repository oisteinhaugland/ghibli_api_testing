/* const request = new XMLHttpRequest();
request.open('GET','data.json',true);

request.onload = function(){
    const data = JSON.parse(this.response);

    
    for(let i = 0;i<data.length;i++){
        let out = `${data[i].name} is a ${data[i].race}.`
        console.log(out);
    }
    
};

request.send(); */


//get films from ghibli api



const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = "logo.png";

const container = document.createElement('div');
container.classList.add('container');
app.appendChild(logo);
app.appendChild(container);




const request = new XMLHttpRequest();
request.open('GET','https://ghibliapi.herokuapp.com/films',true);

request.onload = function(){
//access data

    if(request.status >= 200 && request.status <400){
    
        const data = JSON.parse(this.response);
        data.forEach(movie => {

            const card = document.createElement('div');
            card.classList.add('card');
            
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0,300); // limit characters
            p.textContent = `${movie.description}...`

            
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

            
        });

    } else {
        console.log('error');
    }
};

//send request
request.send();



