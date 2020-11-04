function initMap() {
  const map = new google.maps.Map( document.getElementById( 'map' ), {
    center: {
      lat: 51.513329,
      lng: -0.088950
    },
    zoom: 14
  });
  
  new google.maps.Marker({
    position: {
      lat: 51.513329,
      lng: -0.088950
    },
    map,
    title: `I'm Mary Poppins Y'All!`
  })
}