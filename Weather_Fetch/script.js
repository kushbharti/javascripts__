let temp = document.getElementById("temp");

let humidity = document.getElementById("dh");
let wind = document.getElementById("dw");
let btn = document.getElementById("btn");

let API_KEY = "583f7d1b0ce0d6f2410ca521abb21314";
async function checkWeather() {
  let city_name = document.getElementById("search_city").value;
  if (city_name === "") {
    alert("Please enter a city name");
    return;
  }
  //
  //

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
  //
  //

  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);
  temp.innerHTML = (data.main.temp - 273.15).toFixed(1) + "°C";
  humidity.innerHTML = data.main.humidity + " %";
  city.innerHTML = data.name;
  wind.innerHTML = data.wind.speed + " km/hr";
}

btn.addEventListener("click", checkWeather);
