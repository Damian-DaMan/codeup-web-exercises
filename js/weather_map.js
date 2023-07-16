"use strict";
$(() => {


    // Global Variables

    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();




    // Functions

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

    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4260])
            .addTo(map);
    }

    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.489615, 29.426827])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>We can put anything we want</p>
                </div>
            `);
    }



    // Events






    // Run at the start of page load
    marker.setPopup(popup);
    initializeMap();




















































});