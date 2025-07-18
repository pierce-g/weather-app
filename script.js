const api_key = "64393e073c1248deb84210224251807";
const api_url = "http://api.weatherapi.com/v1/current.json";

const inputField = document.getElementById("location");
const button = document.getElementById("searchButton");

const temperatureText = document.getElementById("temperature");
const weatherText = document.getElementById("weather");

button.addEventListener("click", sendRequest)

function sendRequest(){
    fetch("http://api.weatherapi.com/v1/current.json?key=64393e073c1248deb84210224251807&q=London&aqi=no")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}