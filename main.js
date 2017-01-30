var map;

function initMap() {
    // Save location
    var pde = {lat: -34.972754, lng: -54.952095};

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: pde,
        scrollwheel: false,
        zoom: 14
    });

    // Add a marker
    var marker = new google.maps.Marker({
        position: pde,
        map: map,
        title: "Punta del Este"
    });

    // Add an info window
    var infoWindow = new google.maps.InfoWindow({
        content: "Here is Punta del Este! My overrated city!"
    });
}