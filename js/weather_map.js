(function () {

    "use strict";

    // Global Variables =========================================
    mapboxgl.accessToken = MAPBOX_TOKEN
    let marker;
    let cords = []

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

    // function to render cards on html
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


    // function to take an address(our input), and create a new marker, then call reverse geo with our coords, and fetch weather
    const geocodeAddressMarker = (address, token) => {
        geocode(address, token).then((res) => {
            if (marker) {
                marker.remove()
            }
            console.log(res)
            marker = new mapboxgl.Marker()
                .setLngLat(res)
                .addTo(map);
            map.setCenter(res);
            map.setZoom(10);
            coords = [res[0], res[1]]
            console.log(coords)
            reverseGeoAddress(res[1], res[0], MAPBOX_TOKEN)
            fetchWeather(res[1], res[0], 'imperial', OPEN_WEATHER_APPID)
        })
    }

    //click event for input submit to capture the value, then pass it in to geocodeAddressMarker
    $('#input-btn').click(e => {
        e.preventDefault()
        //capturing input
        const inputAddress = $('#address-input').val()
        console.log(inputAddress)
        //run geocode function with input
        geocodeAddressMarker(inputAddress, MAPBOX_TOKEN)
        // clear input field
        $('#address-input').val('')
    })

    const reverseGeoAddress = (lat, lng, token) => {
        reverseGeocode({lng: lng, lat: lat}, token).then(function (results) {
            // logs the address
            // console.log(results.split(','));
            //splits the string to get just the city and state
            const city = results.split(',')[1]
            const state = results.split(',')[2].replace(/[0-9]/g, '');
            // console.log(city, state, lat, lng);
            //create markup for location
            const locationHTML = `
            <h1>${city}, ${state}</h1>
            `
            //push markup to selected container
            $('.city-state').html(locationHTML)
        });
    }

    // geolocation success function, get coords then fetch weather and render cards, and reverse geo for the address
    const successCallback = (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetchWeather(lat, lng, 'imperial', OPEN_WEATHER_APPID)
        reverseGeoAddress(lat, lng, MAPBOX_TOKEN)
        marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map);
        map.setCenter([lng, lat]);
        map.setZoom(10);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    //Geolocation API, getCurrentPosition takes a success and failure callback
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


    // Events ====================================================
    //             This code below works!
    map.on('click', (e) => {
        // console.log(e);

        const lat = e.lngLat.lat
        const lng = e.lngLat.lng
        console.log(lat, lng);
        if (marker) {
            marker.remove();
        }
        createMarker(lat, lng);
        fetchWeather(lat, lng, 'imperial', OPEN_WEATHER_APPID)
    })


    // Run at the start of page load ================================
    fetchWeather(29.4252, -98.4916, 'imperial', OPEN_WEATHER_APPID)


})();
