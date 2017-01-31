$(function () {
    var $sideMenu = $("#side-menu");
    var $menuToggle = $sideMenu.find(".menu-toggle");
    var $menuToggleIcon = $menuToggle.find(".fa");

    $menuToggleIcon.removeClass("fa-chevron-left").addClass("fa-chevron-right");
    $sideMenu.addClass("closed");

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass("closed");
        $menuToggleIcon.toggleClass("fa-chevron-right fa-chevron-left");
    });
});