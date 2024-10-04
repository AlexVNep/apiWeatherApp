function populateLocale(data) {
  if (data) {
    const date = document.querySelector("#date");
    date.textContent = data["date1"];
    console.log(date);
    const locale = document.querySelector("#locale");
    locale.textContent = data["location"];
    console.log(locale);

    const tempMax = document.querySelector("#temp");

    if (data["days"].length > 1) {
      console.log(data["days"].length);
      console.log(data["days"]);
      data["days"].forEach((temp, index) => {
        tempMax.textContent = data["days"][index][temp];
        console.log(tempMax);
      });
    } else if (data["days"].length <= 1) {
      console.log(data["days"].length);
      tempMax.textContent = data["tMax"];
      console.log(tempMax);
    }
  }
}

export { populateLocale };
