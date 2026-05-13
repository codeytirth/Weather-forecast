let city = document.getElementById("cityInput");
let btn = document.getElementById("searchBtn");

let API_KEY  = "d0e157bf5c93a1aa8df1d899499ec614"

async function getweather() {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`);

        let data = await res.json();

        console.log(data);

        document.getElementById("cityName").innerText = data.name;

        document.getElementById("temp").innerText = data.main.temp.toFixed(1) + "°C";

        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";

        document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;
    }
    catch(err) {
        console.log(err);
    }

}

btn.addEventListener("click",()=> {
    getweather();
});