import "./styles.css";
import getWeatherData from "./weatherData";
import { populateData, populateGif } from "./populateData";
import unitSelection from "./unitSelection";
import { getWeatherGif } from "./weatherData";

const fetchBtn = document.querySelector("#fetchBtn");
const unit = document.querySelector("#unit");

fetchBtn.addEventListener("click", async () => {
  const location = document.querySelector("#location");
  const date1 = document.querySelector("#date1");

  const data = await getWeatherData(location.value, date1.value, unit.value);
  const gifData = await getWeatherGif(data.condition);

  populateData(data);
  populateGif(gifData);
});

unit.addEventListener("change", unitSelection);
