import "./styles.css";
import getWeatherData from "./weatherData";
import { populateLocale } from "./populateData";

const fetchBtn = document.querySelector("#fetchBtn");

fetchBtn.addEventListener("click", async () => {
  const location = document.querySelector("#location");
  const date1 = document.querySelector("#date1");
  const data = await getWeatherData(location.value, date1.value);
  populateLocale(data);
});
