document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fetchWeather");
    const weatherData = document.getElementById("weatherData");
    const weatherIcon = document.getElementById("weatherIcon");
    const skyObject = document.getElementById("skyObject");

    if (!button || !weatherData || !weatherIcon || !skyObject) {
        console.error("❌ Error: One or more elements not found in the DOM!");
        return;
    }

    // Function to update background & sun/moon
    function setBackground() {
        let hour = new Date().getHours();
    
        if (hour >= 6 && hour < 18) {
            document.body.classList.add('day');
            document.body.classList.remove('night');
            skyObject.src = '/images/sun-removebg-preview.png'; // Ensure image exists
        } else {
            document.body.classList.add('night');
            document.body.classList.remove('day');
            skyObject.src = '/images/Moon1.png'; // Ensure image exists
        }
    }

    async function fetchWeather() {
        let location = document.getElementById("location").value;
        if (!location) {
            alert("Please enter a location.");
            return;
        }

        try {
            const apiKey = "d459519e344a038375cb75f9506201e8"; // Replace with your API key
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (data.cod === 200) {
                weatherData.innerHTML = `🌡 Temperature: ${data.main.temp}°C <br> 🌍 Location: ${data.name}`;
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherIcon.style.opacity = 1;
            } else {
                weatherData.innerHTML = "❌ Location not found!";
            }
        } catch (error) {
            console.error("API Error:", error);
            weatherData.innerHTML = "⚠ Error fetching data!";
        }
    }

    // Initialize Background
    setBackground();

    // Event Listener
    button.addEventListener("click", fetchWeather);
});
