window.onload = function() {
    initializeMap();
};

var map;
var pushpin;

function initializeMap() {
    map = new Microsoft.Maps.Map(document.getElementById('mapContainer'), {
        credentials: 'AnE6yffdTmV-V0s9-9sC5xQ0pi9rALijcIdDmrmlkbqYEMiSHxoP_FapnaXPmtQp',
        center: new Microsoft.Maps.Location(11.1271, 78.6569), // Default center (Erode, India)
        zoom: 8 // Default zoom level
    });

    // Add a pushpin for the live location
    pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { color: 'red' });
    map.entities.push(pushpin);

    // Track the live location
    trackLocation();
}

function trackLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            var loc = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
            pushpin.setLocation(loc);
            map.setView({ center: loc });
        }, function(error) {
            console.error('Error getting geolocation:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}
