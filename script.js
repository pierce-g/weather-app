const api_key = "5ded6dc3f67b476b81e224335251807";
const api_url = "https://api.weatherapi.com/v1/current.json";

const inputField = document.getElementById("location");
const button = document.getElementById("searchButton");

const weatherImage = document.getElementById("image")
const temperatureText = document.getElementById("temperature");
const weatherText = document.getElementById("weather");

button.addEventListener("click", sendRequest)

function sendRequest(){
    fetch(api_url+"?key="+api_key+"&q="+inputField.value+"&aqi=no")
        .then(response => {

            if(!response.ok){
                throw new Error("Could not find location");
            }
            return response.json();
        })
        .then(data => {
            weatherImage.src = "https:"+data.current.condition.icon;
            temperatureText.innerHTML = data.current.temp_c+" °C";
            weatherText.innerHTML = data.current.condition.text;
        })
        .catch(error => console.error(error))
}