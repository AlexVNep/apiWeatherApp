import "./styles.css";
import getWeatherData from "./weatherData";
import { populateLocale } from "./populateData";

const fetchBtn = document.querySelector("#fetchBtn");

fetchBtn.addEventListener("click", (event) => {
  getWeatherData();
  populateLocale();
});
