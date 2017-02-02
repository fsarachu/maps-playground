var map;
var markers = [];

function initMap() {
    // Map Dark Theme
    var darkStyle = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];

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

    // Create markers
    locations.forEach(function (location, index) {
        var marker = new google.maps.Marker({
            map: null,
            position: location.position,
            title: location.title,
            animation: google.maps.Animation.DROP,
            id: index
        });

        markers.push(marker);
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow);
        });
    });

    showMarkers();

    // Create info window
    var largeInfoWindow = new google.maps.InfoWindow();
}

function populateInfoWindow(marker, infoWindow) {
    // Check if infoWindow is not already opened in this marker
    if (infoWindow.marker != marker) {
        infoWindow.marker = marker;
        // infoWindow.setContent('<div>' + marker.title + '</div>');
        infoWindow.setContent(marker.position.toString());
        infoWindow.open(map, marker);
        // Clear property after infoWindow is closed
        infoWindow.addListener('closeclick', function () {
            infoWindow.marker = null;
        });
    }
}

function showMarkers() {
    var bounds = new google.maps.LatLngBounds();

    markers.forEach(function (marker) {
        marker.setMap(map);
        bounds.extend(marker.position);
    });

    map.fitBounds(bounds);
}

function hideMarkers(visibleMarkers) {
    visibleMarkers.forEach(function (marker) {
        marker.setMap(null);
    });
}