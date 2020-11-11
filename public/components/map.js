export default {
  name: 'MapView',
  data() {
    return {
      distanceInMetres: null,
      markers: []
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
    
      const map = new google.maps.Map( this.$el, {
        center: {
          lat: 51.513329,
          lng: -0.088950
        },
        zoom: 14
      });
    
      // let markers= []
    
      map.addListener('click', (event) => {
        const position = event.latLng.toJSON()
    
        if (this.markers.length < 2) {
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
    
          this.markers.push(marker)
    
          marker.addListener('click', () => {
            this.markers = this.markers.filter(mapMarker => mapMarker.id === marker.id)
            marker.setMap(null)
          })
        }
    
        if (this.markers.length === 2) {
          const distanceInMetres = google.maps.geometry.spherical.computeDistanceBetween(
            this.markers[0].getPosition(),
            this.markers[1].getPosition()
          )

          this.distanceInMetres = distanceInMetres
    
        }
      })
    }
  },
  template: `<section id="map"></section>`,
};