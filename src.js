
const apiKey = "24a28e67e292ab77eb6dc4cce0e8d9cc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchbox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const Weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";
    
        if(data.weather[0].main == "Clouds") {
            Weathericon.src = "images/clouds.png";
        }  
        else if (data.weather[0].main == "Clear"){
            Weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            Weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            Weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            Weathericon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.transition = "all 0.5s ease-in-out";
    }
    
   
    
   
    }

    Searchbtn.addEventListener("click", ()=>{
        checkWeather(Searchbox.value);
   
    })

   