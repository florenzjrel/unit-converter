function getResult() {
  let currentInput = document.getElementById("user-input").value
  currentInput = currentInput == "" ? 0 : currentInput

  // Meter to Foot
  document.getElementById("meter-to-foot").textContent = currentInput
  let meterConvert = currentInput * 3.281
  meterConvert = meterConvert.toFixed(3)
  document.getElementById("foot").textContent = meterConvert

  // Foot to Meter
  document.getElementById("foot-to-meter").textContent = currentInput
  let footConvert = currentInput / 3.281
  footConvert = footConvert.toFixed(3)
  document.getElementById("meter").textContent = footConvert

  // Liter to Gallon
  document.getElementById("liter-to-gallon").textContent = currentInput
  let literConvert = currentInput / 4.546
  literConvert = literConvert.toFixed(3)
  document.getElementById("gallon").textContent = literConvert

  // Gallon to Liter
  document.getElementById("gallon-to-liter").textContent = currentInput
  let gallonConvert = currentInput * 4.546
  gallonConvert = gallonConvert.toFixed(3)
  document.getElementById("liter").textContent = gallonConvert

  // Kilo to Pound
  document.getElementById("kilo-to-lbs").textContent = currentInput
  let kiloConvert = currentInput * 2.205
  kiloConvert = kiloConvert.toFixed(3)
  document.getElementById("pound").textContent = kiloConvert

  // Pound to Kilo
  document.getElementById("lbs-to-kilo").textContent = currentInput
  let poundConvert = currentInput / 2.205
  poundConvert = poundConvert.toFixed(3)
  document.getElementById("kilo").textContent = poundConvert
}