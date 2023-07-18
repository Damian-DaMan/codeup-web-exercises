"use strict";
$(() => {


    // Global Variables
    //     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    const map = initializeMap();
    // const marker = createMarker();
    // const popup = createPopup();
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const SAN_ANTONIO_COORDS = [-98.4916, 29.4252];

    const apiUrl = `${OPEN_WEATHER_URL}?lat=${SAN_ANTONIO_COORDS[1]}&lon=${SAN_ANTONIO_COORDS[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`;



//  bread and butter to pull weather API data below
    function getWeatherData() {
        $.ajax({
            url: apiUrl,
            method: 'GET',
        }).done((data) => {
            console.log(data);

        })
    }




    //     FUNCTIONS with MAPBOX
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












    // Events









    // Run at the start of page load
    // marker.setPopup(popup);
    initializeMap();
    getWeatherData(SAN_ANTONIO_COORDS[1], SAN_ANTONIO_COORDS[0]);

















});