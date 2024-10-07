function populateLocale(data) {
  if (data) {
    const date = document.querySelector("#date");
    date.textContent = data["date1"];
    console.log(date);
    const locale = document.querySelector("#locale");
    locale.textContent = data["location"];
    console.log(locale);

    const tempBox = document.querySelector("#temp-box");

    if (data["days"].length > 1) {
      console.log(data["days"].length);
      console.log(data["days"]);
      tempBox.replaceChildren();
      data["days"].forEach((temp, index) => {
        const tempMaxMin = document.createElement("p");
        tempMaxMin.textContent =
          data["days"][index]["datetime"] +
          " " +
          "Max: " +
          data["days"][index]["tempmax"] +
          " " +
          "Min: " +
          data["days"][index]["tempmin"];
        tempBox.appendChild(tempMaxMin);
        console.log(tempMaxMin);
      });
    } else if (data["days"].length <= 1) {
      tempBox.replaceChildren();
      console.log(data["days"].length);
      const tempMaxMin = document.createElement("p");
      tempMaxMin.textContent =
        "Max: " + data["tMax"] + " " + "Min: " + data["tMin"];
      tempBox.appendChild(tempMaxMin);
      console.log(tempMaxMin);
    }
  }
}

function populateGif(gifData) {
  const tempGifDiv = document.querySelector("#temp-image");
  const tempGif = document.createElement("img");
  tempGif.src = gifData["gif"];
  tempGifDiv.appendChild(tempGif);
}

export { populateLocale, populateGif };
