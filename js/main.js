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

    var $toggleDrawingButton = $("#toggle-drawing");

    $toggleDrawingButton.on("click", function () {
        if (drawingManager.map) {
            drawingManager.setMap(null);
            $toggleDrawingButton.text("Start Drawing");
        } else {
            drawingManager.setMap(map);
            $toggleDrawingButton.text("Stop Drawing");
        }
    });
});