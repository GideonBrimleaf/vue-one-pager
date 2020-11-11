export default {
  name: 'MapView',
  data() {
    return {
      map: null,
      distanceInMetres: null
    }
  },
  mounted() {
    window.gmapsCallback = () => this.initMap()
    this.gmapsInit()
  },
  methods: {
    gmapsInit: function() {
      const apiKey = 'AIzaSyBWHqxFV3h5m4DuSSmQgHm3QO5CDjEWLjE';
      const callbackName = 'gmapsCallback';

      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}&libraries=geometry`;
      document.querySelector('head').appendChild(script);
    },
    initMap: function() {
    
      this.map = new google.maps.Map( this.$el, {
        center: {
          lat: 51.513329,
          lng: -0.088950
        },
        zoom: 14
      });
    
      // let markers= []
    
      // map.addListener('click', (event) => {
      //   const position = event.latLng.toJSON()
    
      //   if (markers.length < 2) {
      //     const marker = new google.maps.Marker({
      //       position: {
      //         lat: position.lat,
      //         lng: position.lng
      //       },
      //       draggable: true,
      //       map,
      //       title: `I'm Mary Poppins Y'All!`,
      //       id: position.lat + '' + position.lng
      //     })
    
      //     markers.push(marker)
    
      //     marker.addListener('click', () => {
      //       markers = markers.filter(mapMarker => mapMarker.id === marker.id)
      //       marker.setMap(null)
      //     })
      //   }
    
      //   if (markers.length === 2) {
      //     const distanceInMetres = google.maps.geometry.spherical.computeDistanceBetween(
      //       markers[0].getPosition(),
      //       markers[1].getPosition()
      //     )

      //     console.log('distance in meters is', distanceInMetres)
      //     this.distanceInMeters = distanceInMetres
    
      //   }
      // })
    }
  },
  template: `<section id="map"></section>`,
};