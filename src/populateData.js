import getWeatherData from "./weatherData";

const data = await getWeatherData(location.value);

function populateLocale() {
  if (data) {
    const location = document.querySelector("#location");
    const locale = document.querySelector("#locale");
    locale.textContent = data[location];
  }
}

// const date1 = document.querySelector("#date1");
// const tempmax = document.querySelector("#temp");

export { populateLocale };
