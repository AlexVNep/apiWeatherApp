import "./styles.css";
import getWeatherData from "./weatherData";
import { populateLocale } from "./populateData";
import unitSelection from "./unitSelection";

const fetchBtn = document.querySelector("#fetchBtn");
const unit = document.querySelector("#unit");

fetchBtn.addEventListener("click", async () => {
  const location = document.querySelector("#location");
  const date1 = document.querySelector("#date1");

  const data = await getWeatherData(location.value, date1.value, unit.value);

  populateLocale(data);
});

unit.addEventListener("change", unitSelection);
