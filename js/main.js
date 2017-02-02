$(function () {
    var $toggleMarkersButton = $("#toggle-markers");

    $toggleMarkersButton.on("click", function () {
        var visibleMarkers = markers.filter(function (marker) {
            return marker.map;
        });

        if (visibleMarkers.length > 0) {
            hideMarkers(visibleMarkers);
            $toggleMarkersButton.text("Show Markers");
        } else {
            showMarkers();
            $toggleMarkersButton.text("Hide Markers");
        }
    });
});