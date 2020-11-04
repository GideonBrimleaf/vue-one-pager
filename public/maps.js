function initMap() {
  const map = new google.maps.Map( document.getElementById( 'map' ), {
    center: {
      lat: 51.513329,
      lng: -0.088950
    },
    zoom: 14
  });

  let markers= []

  map.addListener('click', function(event) {
    const position = event.latLng.toJSON()

    if (markers.length < 2) {
      const marker = new google.maps.Marker({
        position: {
          lat: position.lat,
          lng: position.lng
        },
        draggable: true,
        map,
        title: `I'm Mary Poppins Y'All!`,
        id: position.lat + '' + position.lng
      })

      markers.push(marker)

      marker.addListener('click', function() {
        markers = markers.filter(mapMarker => mapMarker.id === marker.id)
        marker.setMap(null)
      })
    }
  })
}