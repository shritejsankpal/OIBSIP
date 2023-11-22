/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
}

function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
}

function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
}

function temperatureConverter3(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = valNum - 273.15;
}