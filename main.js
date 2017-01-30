var map;
var markers = [];

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.9512849, lng: -54.9452626},
        zoom: 13
    });

    // Define locations
    var locations = [
        {title: "Conrad Hotel", position: {lat: -34.972754, lng: -54.952095}},
        {title: "Los Dedos", position: {lat: -34.957709, lng: -54.937577}},
        {title: "Playa El Emir", position: {lat: -34.962126, lng: -54.940035}},
        {title: "Faro de Punta del Este", position: {lat: -34.968930, lng: -54.951453}},
        {title: "Plaza de Los Artesanos", position: {lat: -34.962919, lng: -54.943766}}
    ];

    // Define bounds object
    var bounds = new google.maps.LatLngBounds();

    // Create markers
    locations.forEach(function (location, index) {
        var marker = new google.maps.Marker({
            map: map,
            position: location.position,
            title: location.title,
            animation: google.maps.Animation.DROP,
            id: index
        });

        bounds.extend(marker.position);
        markers.push(marker);
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow);
        });
    });

    // Extend map bounds
    map.fitBounds(bounds);

    // Create info window
    var largeInfoWindow = new google.maps.InfoWindow();

    function populateInfoWindow(marker, infoWindow) {
        // Check if infoWindow is not already opened in this marker
        if (infoWindow.marker != marker) {
            infoWindow.marker = marker;
            infoWindow.setContent('<div>' + marker.title + '</div>');
            infoWindow.open(map, marker);
            // Clear property after infoWindow is closed
            infoWindow.addListener('closeclick', function () {
                infoWindow.marker = null;
            });
        }
    }

}