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
        toggleDrawing(drawingManager);

        if (drawingManager.map) {
            $toggleDrawingButton.text("Stop Drawing");
        } else {
            $toggleDrawingButton.text("Start Drawing");
        }
    });
});