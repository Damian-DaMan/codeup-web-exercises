$(() => {

    // Global Variables
    const map = initializeMap();
    const favRestaurantButton = document.querySelector('#fav-restaurant');
    // Functions

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

        // function that centesr the map on the city with my fav restaurant
    function showFavRestaurantCity() {
        geocode('Austin, Texas', MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter
            })
    }

    // function that centers map on favREST
    function showFavRestaurant() {
        geocode('2965 Historic Decatur Rd, San Diego, CA 92106', MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setcenter(data)
                    .setZoom(15)
                const marker = new mapboxgl.Marker
                    .setLngLat(data)
                    .addTo(map);
            })
    }



    // Events

    favRestaurantButton.addEventListener('click', showFavRestaurant);



    // Run when launched
    showFavRestaurant();













});