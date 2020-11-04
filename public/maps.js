function initMap() {
  const map = new google.maps.Map( document.getElementById( 'map' ), {
    center: {
      lat: 51.513329,
      lng: -0.088950
    },
    zoom: 14
  });

  google.maps.event.addListener(map, 'click', function(event) {
    const position = event.latLng.toJSON()
    new google.maps.Marker({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      draggable: true,
      map,
      title: `I'm Mary Poppins Y'All!`
    })
  })
}