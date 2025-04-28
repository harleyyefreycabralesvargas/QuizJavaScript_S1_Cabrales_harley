function fetchclima(){
    let xhr = new XMLHttpRequest();
    let link= `http://api.weatherapi.com/v1/forecast.json?key=2f2c138932c44b5a8ae115810252804&q=Floridablanca&lang=es&days=14  `;
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta); 
            displayclimainicio(respuesta);
        }
    };
    xhr.send();
}
function displayclimainicio(data){
    let nombrepokeHTML = document.getElementById('inicio');
    if(data.response == "error"){
        nombrepokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        let temp_c=Math.round(data["current"]["temp_c"])
        let temp_fc=Math.round(data["current"]["feelslike_c"])
        let fecha_inicio=data["location"]["localtime"]
        console.log((fecha_inicio))
        nombrepokeHTML.innerHTML=`
        <img class="busquedainicio" src="./img/search_white.png">
        <h3 class="lugar">${data["location"]["name"]}, ${data["location"]["country"]}</h3>
        <h1 class="temperaturainicio">${temp_c}&deg</h1>
        <p class="feelinicio">Feels like ${temp_fc}&deg</p>
        <p class="fechainicio">${data["location"]["localtime"]}</p>
        <img class="iclimainicio" src="${data["current"]["condition"]["icon"]}" >
        <h2 class="climainicio"> ${data["current"]["condition"]["text"]}</h2>
        `
    }
}
fetchclima();