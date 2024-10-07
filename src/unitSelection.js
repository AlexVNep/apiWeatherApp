function unitSelection() {
  const unit = document.querySelector("#unit");
  const unitLabel = document.querySelector("#unit-label");
  if (unit.checked) {
    console.log("Is Checked");
    unit.value = "metric";
    console.log(unit.value);
    unitLabel.textContent = "°C";
  } else {
    console.log("Not checked");
    unit.value = "us";
    console.log(unit.value);
    unitLabel.textContent = "°F";
  }
}

export default unitSelection;
