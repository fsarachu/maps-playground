$(function () {
    var $toggleMarkersButon = $("#toggle-markers");

    $toggleMarkersButon.on("click", function () {
        var visibleMarkers = markers.filter(function (marker) {
            return marker.map;
        });

        if (visibleMarkers.length > 0) {
            hideMarkers(visibleMarkers);
            $toggleMarkersButon.text("Show Markers");
        } else {
            showMarkers();
            $toggleMarkersButon.text("Hide Markers");
        }
    });
});