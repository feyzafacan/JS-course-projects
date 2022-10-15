
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-conversion")
let volumeEl = document.getElementById("volume-conversion")
let massEl = document.getElementById("mass-conversion")
let inputEl = document.getElementById("input")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click",function(){
    let value = inputEl.value

    lengthEl.textContent = `${value} meters = ${(value * meterToFeet).toFixed(2)} feet
                            | ${value} feet = ${(value / meterToFeet).toFixed(2)} meters`
    volumeEl.textContent = `${value} liters = ${(value * literToGallon).toFixed(2)} gallons
                            | ${value} gallons = ${(value / literToGallon).toFixed(2)} liters`
    massEl.textContent = `${value} kilos = ${(value * kiloToPound).toFixed(2)} pounds
                            | ${value} pounds = ${(value / kiloToPound).toFixed(2)} kilos`

})

