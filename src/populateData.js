async function populateLocale(data) {
  if (data) {
    const locale = document.querySelector("#locale");
    locale.textContent = data["location"];
    const date = document.querySelector("#date");
    date.textContent = data["date1"];
  }
}

// const tempmax = document.querySelector("#temp");

export { populateLocale };
