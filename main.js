var map;

function initMap() {
    // Save location
    var pde = {lat: -34.972754, lng: -54.952095};

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.9512849, lng: -54.9452626},
        scrollwheel: false,
        zoom: 13
    });

    // Add a marker
    var marker = new google.maps.Marker({
        position: pde,
        map: map,
        title: "Punta del Este"
    });

    // Add an info window
    var infoWindow = new google.maps.InfoWindow({
        content: "Here is Punta del Este! The overrated city where I was born!"
    });

    // Attach infoWindow to marker
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    })

}