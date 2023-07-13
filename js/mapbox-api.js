$(() => {

    // Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();




    // Functions
        //function that initializes the map from MAP_TOKEN
        function initializeMap() {
            // provide token
            mapboxgl.accessToken = MAPBOX_TOKEN;
                // you have to declare where the token is going to: <html>ELEMENT
            const mapOptions = {
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                zoom: 10,
                center: [-98.4916, 29.4252],

            }

            return new mapboxgl.Map(mapOptions);

        }

        // function that createsa a Marker at CodeUp
        function createMarker() {
            return new mapboxgl.Marker()
                .setLngLat([-98.4916, 29.4252])
                .addTo(map);
        }

        // function that creates a popup
        function createPopup() {
            return new mapboxgl.Popup()
                .setLngLat([-98.4916, 29.4252])
                .setHTML(`
                    <div>
                        <h1>CodeUp</h1>
                        <p>Countdown city baby</p>
                    </div>
                `);
        }

        // Function that brings me to Paris
        function goToParis() {
            geocode('Paris', MAPBOX_TOKEN).then((data) => {
                console.log(data);
                map.setCenter(data);
            })
        }

        // Function that uses reverse geocode
        // takes the coordinates from the center of the map
        // and print on the screen the address
        function findAndPrintAddress() {
            const coords = map.getCenter();
            reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
                console.log(data);
                document.querySelector('h1').innerHTML = `${data}`;
            });
        }

        // function for marking The Alamo
        function markAlamo() {
            geocode('The Alamo, San Antonio', MAPBOX_TOKEN).then((data) => {
                const alamoPopup = new mapboxgl.Popup()
                    .setHTML(`<p>Remember the Alamo!</p>`);
                const alamoMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(alamoPopup);
                alamoPopup.addTo(map);

            })
        }
    // Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);



    // runs when the program loads
        map.setZoom(1);
        marker.setPopup(popup);
























});