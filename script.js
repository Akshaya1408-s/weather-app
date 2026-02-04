const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML =
                    "City not found ❌";
            } else {
                document.getElementById("weatherResult").innerHTML = `
                    <p><b>City:</b> ${data.name}</p>
                    <p><b>Temperature:</b> ${data.main.temp} °C</p>
                    <p><b>Weather:</b> ${data.weather[0].description}</p>
                    <p><b>Humidity:</b> ${data.main.humidity}%</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML =
                "Error fetching data ⚠️";
        });
}
