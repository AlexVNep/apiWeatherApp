function populateLocale(data) {
  if (data) {
    const date = document.querySelector("#date");
    date.textContent = data["date1"];
    console.log(date)
    const locale = document.querySelector("#locale");
    locale.textContent = data["location"];
    console.log(locale)    
  }
}

// const tempmax = document.querySelector("#temp");

export { populateLocale };
