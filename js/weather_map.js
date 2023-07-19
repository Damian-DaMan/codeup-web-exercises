(function () {

    "use strict";

    // Global Variables =========================================
    mapboxgl.accessToken = MAPBOX_TOKEN
    let marker;
    let cords = []
    // const apiUrl = `${OPEN_WEATHER_URL}?lat=${SAN_ANTONIO_COORDS[1]}&lon=${SAN_ANTONIO_COORDS[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`;

    let searchBox = document.querySelector('#user-input');
    let searchBtn = document.querySelector('#search');

    // this gets all the information we need to even use the weather app
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

    // function to render cards dynamically on page
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
<div class="card text-center ">
  <div class="card-header">${currentDay}, ${currentMonth} ${currentDate}
  </div>
  <div class="card-body">
    <h5 class="card-title">Max ${maxTemp} °F<hr>Min  ${minTemp} °F </h5>
    <img src="${weatherIcon}">
    <p class="card-text">${description}</p>
    <p class="card-text">Humdity: ${humidity}%</p>
    <p class="card-text">Pressure: ${pressure}hPA</p>
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

    // Produces map
    //creating the map
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());


    // Creates a marker
    const createMarker = (lat, lng) => {
        marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map);

    }


    // Events ====================================================

    map.on('click', (e) =>{
        // console.log(e);

        const lat = e.lngLat.lat
        const lng = e.lngLat.lng
        console.log(lat, lng);
        if(marker) {
            marker.remove();
        }
        createMarker(lat, lng);
        fetchWeather(lat, lng, 'imperial', OPEN_WEATHER_APPID)
    })

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



})();
