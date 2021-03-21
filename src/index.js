let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let date = document.querySelector("#date");
let time = document.querySelector("#time");
let day = document.querySelector("#day");
let year = document.querySelector("#year");

let now = new Date();
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentMonth = months[now.getMonth()];
if (currentMonth < 12) {
  currentMonth = now.getMonth() + 1;
}
let currentYear = now.getFullYear();

date.innerHTML = `${currentMonth} ${currentDate}`;
time.innerHTML = `${hours}:${minutes}`;
day.innerHTML = `${currentDay}`;
year.innerHTML = `${currentYear}`;

// problem in the function below
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "ee85c255dfdb83fbd986e0133d61ab75";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  document.querySelector("#city-span").innerHTML = response.data.name;
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#currentLocation");
button.addEventListener("click", getCurrentPosition);

function showTemperature(response) {
  document.querySelector("#city-span").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function retrieveLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "ee85c255dfdb83fbd986e0133d61ab75";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(retrieveLocation);

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search").value;
  let cityElement = document.querySelector("#city-span");
  let countryElement = document.querySelector("#country");
  let biggerElement = document.querySelector(".bigger");
  let precipitationElement = document.querySelector("#precipitation");
  let windElement = document.querySelector("#windspeed");
  let humidityElement = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.weather.main.temp;
  let apiKey = "ee85c255dfdb83fbd986e0133d61ab75";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${cityInput}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  cityElement.innerHTML = cityInput.value;
  countryElement.innerHTML = " ";
  biggerElement.innerHTML = " ";
  precipitationElement.innerHTML = " ";
  windElement.innerHTML = " ";
  humidityElement.innerHTML = " ";
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${respose.data.weather[0].icon}@2x.png`
  );
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function displayFahrenheitTemperature() {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function displayFahrenheitTemperature(event) {
event.preventDefault();
celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
let temperatureElement = document.querySelector("#temp");
temperatureElement.innerHTML = Math.round(fahrrenheitTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener = ("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);