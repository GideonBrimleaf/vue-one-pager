let map;

function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
    center: {
      lat: 51.513329,
      lng: -0.088950
    },
    zoom: 14
  });
}