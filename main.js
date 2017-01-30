var map;

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.9512849, lng: -54.9452626},
        scrollwheel: false,
        zoom: 13
    });

    // Define locations
    var locations = [
        {title: "Conrad Hotel", location: {lat: -34.972754, lng: -54.952095}},
        {title: "Los Dedos", location: {lat: -34.957709, lng: -54.937577}},
        {title: "Playa El Emir", location: {lat: -34.962126, lng: -54.940035}},
        {title: "Faro de Punta del Este", location: {lat: -34.968930, lng: -54.951453}},
        {title: "Plaza de Los Artesanos", location: {lat: -34.962919, lng: -54.943766}}
    ];

}