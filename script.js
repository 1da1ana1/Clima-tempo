const apiKey = "24c431b4fc5e0917a82307de7accaf7c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".weather-icon")

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

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})