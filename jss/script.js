

function fetchclima(){
    let xhr = new XMLHttpRequest();
    let link= `https://api.weatherapi.com/v1/forecast.json?key=2f2c138932c44b5a8ae115810252804&q=Floridablanca&lang=es&days=14  `;
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta); 
            displayclimainicio(respuesta);
            displaywindspeed(respuesta);
            displayrainchanse(respuesta);
            displaypreasuree(respuesta);
            displayuv(respuesta);
            displayhourly(respuesta);
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
        let diamax=Math.round(data["forecast"]["forecastday"][0]["day"]["maxtemp_c"])
        let diamin=Math.round(data["forecast"]["forecastday"][0]["day"]["mintemp_c"])
        console.log((diamax))
        nombrepokeHTML.innerHTML=`
        <img class="busquedainicio" src="./img/search_white.png">
        <h3 class="lugar">${data["location"]["name"]}, ${data["location"]["country"]}</h3>
        <h1 class="temperaturainicio">${temp_c}&deg</h1>
        <p class="feelinicio">Feels like ${temp_fc}&deg</p>
        <p class="fechainicio">${data["location"]["localtime"]}</p>
        <img class="iclimainicio" src="${data["current"]["condition"]["icon"]}">
        <h2 class="climainicio"> ${data["current"]["condition"]["text"]}</h2>
        <h3 class="diainicio">Day ${diamax}&deg</h3>
        <h3 class="nocheinicio">Night ${diamin}&deg</h3>
        `
    }
}
function displaywindspeed(wind){
    let windHTML = document.getElementById('windspeed');
    if(wind.response == "error"){
        windHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        for(var i=1;i<24;i++){
            if(wind["forecast"]["forecastday"][0]["hour"][i]["temp_f"]==wind["current"]["temp_f"]){
                a=i
                console.log(a);
                
            }
        };
        let difwind= Math.round(wind["forecast"]["forecastday"][0]["hour"][a]["wind_kph"]-wind["forecast"]["forecastday"][0]["hour"][a-1]["wind_kph"]);
        let flechawind = difwind < 0 ? '↓' : '↑';
        let colorwind = difwind < 0 ? 'red' : 'blue';
        console.log(difwind)
        windHTML.innerHTML=`
        <p class="windtexto">Wind speed</p>
        <img class="imagenwind" src="./img/air.png">
        <h2 class="windvelocidad1"> ${Math.round(wind["forecast"]["forecastday"][0]["hour"][a]["wind_kph"])}km/h</h2>
        <p class="flechawind" style="color:${colorwind};">${flechawind}</p><h4 class="diferenciawind"> ${Math.abs(difwind)} km/h</h4>

        `
    }
}
function displayrainchanse(rain){
    let rainHTML = document.getElementById('rainchance');
    if(rain.response == "error"){
        rainHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        for(var i=1;i<24;i++){
            if(rain["forecast"]["forecastday"][0]["hour"][i]["temp_f"]==rain["current"]["temp_f"]){
                a=i
                console.log(a);
                
            }
        };
        let difrain= Math.round(rain["forecast"]["forecastday"][0]["hour"][a]["chance_of_rain"]-rain["forecast"]["forecastday"][0]["hour"][a-1]["chance_of_rain"]);
        let flecharain = difrain < 0 ? '↓' : '↑';
        let colorrain = difrain < 0 ? 'red' : 'blue';
        console.log(difrain)
        rainHTML.innerHTML=`
        <p class="windtexto">Rain chance</p>
        <img class="imagenwind" src="./img/rainy.png">
        <h2 class="windvelocidad1"> ${Math.round(rain["forecast"]["forecastday"][0]["hour"][a]["chance_of_rain"])}%</h2>
        <p class="flechawind" style="color:${colorrain};">${flecharain}</p><h4 class="diferenciawind"> ${Math.abs(difrain)}%</h4>

        `
    }
}
function displaypreasuree(preasure){
    let preasureHTML = document.getElementById('preasure');
    if(preasure.response == "error"){
        preasureHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        for(var i=1;i<24;i++){
            if(preasure["forecast"]["forecastday"][0]["hour"][i]["temp_f"]==preasure["current"]["temp_f"]){
                a=i
                console.log(a);
                
            }
        };
        let difpreasure= Math.round(preasure["forecast"]["forecastday"][0]["hour"][a]["pressure_mb"]-preasure["forecast"]["forecastday"][0]["hour"][a-1]["pressure_mb"]);
        let flechapreasure = difpreasure < 0 ? '↓' : '↑';
        let colorpreasure = difpreasure < 0 ? 'red' : 'blue';
        console.log(difpreasure)
        preasureHTML.innerHTML=`
        <p class="windtexto">Pressure</p>
        <img class="imagenwind" src="./img/waves.png">
        <h2 class="windvelocidad1"> ${Math.round(preasure["forecast"]["forecastday"][0]["hour"][a]["pressure_mb"])} hpa</h2>
        <p class="flechawind" style="color:${colorpreasure};">${flechapreasure}</p><h4 class="diferenciawind"> ${Math.abs(difpreasure)} hpa</h4>
        `
    }
}
function displayuv(uv){
    let uvHTML = document.getElementById('uvindex');
    if(uv.response == "error"){
        uvHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        for(var i=1;i<24;i++){
            if(uv["forecast"]["forecastday"][0]["hour"][i]["temp_f"]==uv["current"]["temp_f"]){
                a=i
                console.log(a);
                
            }
        };
        let difuv=uv["forecast"]["forecastday"][0]["hour"][a]["uv"]-uv["forecast"]["forecastday"][0]["hour"][a-1]["uv"];
        let flechauv = difuv < 0 ? '↓' : '↑';
        let coloruv = difuv < 0 ? 'red' : 'blue';
        console.log(difuv)
        uvHTML.innerHTML=`
        <p class="windtexto">UV Index</p>
        <img class="imagenwind" src="./img/light_mode.png">
        <h2 class="windvelocidad1"> ${uv["forecast"]["forecastday"][0]["hour"][a]["uv"]}</h2>
        <p class="flechawind" style="color:${coloruv};">${flechauv}</p><h4 class="diferenciawind"> ${Math.abs(difuv)}</h4>
        `
    }
}
function displayhourly(hourly){
    let hourlyHTML = document.getElementById('hourly');
    if(hourly.response == "error"){
        hourlyHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        for(var i=1;i<24;i++){
            if(hourly["forecast"]["forecastday"][0]["hour"][i]["temp_f"]==hourly["current"]["temp_f"]){
                a=i
                console.log(a);
                
            }
        };
        let difhourly=hourly["forecast"]["forecastday"][0]["hour"][a]["hourly"]-hourly["forecast"]["forecastday"][0]["hour"][a-1]["hourly"];
        let flechahourly = difhourly < 0 ? '↓' : '↑';
        let colorhourly = difhourly < 0 ? 'red' : 'blue';
        console.log(difhourly)
        hourlyHTML.innerHTML=`
        <p class="windtexto">hourly Index</p>
        <img class="imagenwind" src="./img/light_mode.png">
        <h2 class="windvelocidad1"> ${hourly["forecast"]["forecastday"][0]["hour"][a]["hourly"]}</h2>
        <p class="flechawind" style="color:${colorhourly};">${flechahourly}</p><h4 class="diferenciawind"> ${Math.abs(difhourly)}</h4>
        `
    }
}
fetchclima();