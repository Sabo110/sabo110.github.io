document.getElementById('bout').addEventListener('click',()=>{
    if(document.getElementById('zone').value !== ''){
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+document.getElementById('zone').value+'&appid=d4b03a2c560506b240b4363622e44bf2&lang=fr&units=metric';
        fetch(url)
        .then( reponse => reponse.json())
        .then( data =>{
            document.getElementById('p1').textContent = data.name
            document.getElementById('p2').textContent = data.main.temp+ ' °C'
            console.log(data)
            
        })
        .catch( erreur => console.log(erreur))
        
    }
})




