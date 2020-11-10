const App = {
  name: 'App',
  data() {
    return {
      stuff: ["Banana", "Orange", "Apple"],
      selectedStuff: '',
      distanceInMeters: null
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
      
      console.log('the element is', this.$el)
    
      const map = new google.maps.Map( document.getElementById( 'map' ), {
        center: {
          lat: 51.513329,
          lng: -0.088950
        },
        zoom: 14
      });
    
      let markers= []
    
      map.addListener('click', (event) => {
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
    
          marker.addListener('click', () => {
            markers = markers.filter(mapMarker => mapMarker.id === marker.id)
            marker.setMap(null)
          })
        }
    
        if (markers.length === 2) {
          const distanceInMetres = google.maps.geometry.spherical.computeDistanceBetween(
            markers[0].getPosition(),
            markers[1].getPosition()
          )

          console.log('distance in meters is', distanceInMetres)
          this.distanceInMeters = distanceInMetres
    
        }
      })
    }
  },
  template: `
    <section>
      <h1>My Amazing Selector!</h1>
      <select v-model="selectedStuff">
        <option value="" selected="selected" disabled>Select a Thing:</option>
        <option v-for="thing in this.stuff">{{thing}}</option>
      </select>
      <br>
      <p v-if="this.distanceInMeters">The distance between the two points is {{this.distanceInMeters}}</p>
    </section>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);