const apiKey = "24c431b4fc5e0917a82307de7accaf7c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".weather-icon");
var timeDisplay = document.getElementById("time");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Clouds"){
            wheaterIcon.src = "images/clouds.png"
        }else if(data.weather[0].main === "Clear"){
            wheaterIcon.src = "images/clear.png"
        }else if(data.weather[0].main === "Rain"){
            wheaterIcon.src = "images/rain.png"
        }else if(data.weather[0].main === "Drizzle"){
            wheaterIcon.src = "images/drizzle.png"
        }else if(data.weather[0].main === "Mist"){
            wheaterIcon.src = "images/mist.png"
        }

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
    
}

function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = `Horário de Brasília: ${formattedString}`;
}

refreshTime()

setInterval(refreshTime, 1000);

function background(){

        if(hora >= 0 && hora < 12){
            //dia
            img.src = './images/day-background.png'
        }else if (hora >= 12 && hora <= 18){
            //tarde
            img.src = './images/day-background.png'
            fundo.style.backgroundColor='orange'
            geral.style.backgroundColor ='orangered'
        }else{
            // noite 
            img.src = './images/day-background.png'
        }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})