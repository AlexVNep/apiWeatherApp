async function weatherData() {
  const apiKey = "Y6T2RFGHWWZGLRG3EDDNF9UUD";
  const location = prompt("Give a location");
  let date1 = prompt("Give a date");

  let today = new Date();

  function getDate() {
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    console.log(today);
  }

  if (date1 === "") {
    getDate();
    date1 = today;
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}?unitGroup=metric&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.error(error.message);
  }
}

export default weatherData;
