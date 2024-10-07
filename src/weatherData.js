async function getWeatherData(location, date1, unit) {
  const apiKey = "Y6T2RFGHWWZGLRG3EDDNF9UUD";

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}?unitGroup=${unit}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
    return {
      location: location,
      date1: date1,
      unit: unit,
      tMax: weatherData.days[0].tempmax,
      tMin: weatherData.days[0].tempmin,
      days: weatherData.days,
    };
  } catch (error) {
    console.error(error.message);
  }
}

export default getWeatherData;

//   ${location}/${date1}
