const temperature = 9;
const windSpeed = 23;

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("wind-chill").textContent = windChill.toFixed(2) + " °C";
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

window.onload = displayWindChill;
