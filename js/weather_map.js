(function () {

    "use strict";

    // Global Variables =========================================

    const map = initializeMap();
    // const marker = createMarker();
    // const apiUrl = `${OPEN_WEATHER_URL}?lat=${SAN_ANTONIO_COORDS[1]}&lon=${SAN_ANTONIO_COORDS[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`;

    let searchBox = document.querySelector('#user-input');

    let searchBtn = document.querySelector('#search');


    const fetchWeather = (lat, lon, units, key) => {
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: key,
            lat: lat,
            lon: lon,
            units: units
        }).done(function (data) {
            getForecastCards(data)
        });
    }

    fetchWeather();


    const getForecastCards = (data) => {
        let html = '';
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        data.daily.forEach((day, i) => {
            if (i < 5) {
                // console.log(i);
                const weatherIcon = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
                // console.log(data);
                const dt = data.daily[i].dt
                const description = data.daily[i].weather[0].main
                const maxTemp = data.daily[i].temp.max
                const minTemp = data.daily[i].temp.min
                const humidity = data.daily[i].humidity
                const pressure = data.daily[i].pressure
                //converting dt into a date object
                const date = new Date(dt * 1000);
                // console.log(date)
                const currentDate = date.getDate()
                const currentMonth = month[date.getMonth()]
                const currentDay = weekday[date.getDay()];
                html += `
<div class="card text-center">
  <div class="card-header">${currentDay}, ${currentMonth} ${currentDate}
  </div>
  <div class="card-body">
    <h5 class="card-title">${minTemp} / ${maxTemp}</h5>
    <img src="${weatherIcon}">
    <p class="card-text">${description}</p>
    <p class="card-text">Humdity: ${humidity}</p>
    <p class="card-text">Pressure: ${pressure}</p>
  </div>
  <div class="card-footer text-body-secondary">
   Go for a walk
  </div>
</div>
`
            }
        })
        $('#forecast').html(html);
    }


    //     FUNCTIONS with MAPBOX ===================================

    // Keep this
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }


    // Creates a marker
    function createMarker(map) {
        map.center
        const marker = new mapboxgl.Marker()
            .setLngLat(latLng)
            .addTo(map);
    }


    // Events ====================================================


    // searchBox.addEventListener('input', (e) => {
    //     console.log(e.target.value);
    // });
    // searchBtn.addEventListener('click', () => {
    // })
    // map.on('mouseup', () => {
    //     // getData(map);
    // });
    // map.on('click mouseup', () => {
    //     // getData(map);
    // });


    // Run at the start of page load ================================

    fetchWeather(29.4252, -98.4916, 'imperial', OPEN_WEATHER_APPID)

    // Brings up the map on launch
    initializeMap();


})();
