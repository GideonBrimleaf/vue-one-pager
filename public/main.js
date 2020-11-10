import gmapsInit from './components/gmaps.js'

const App = {
  name: 'App',
  data() {
    return {
      stuff: ["Banana", "Orange", "Apple"],
      selectedStuff: ''
    }
  },
  mounted() {
    gmapsInit()
    .then(() => this.initMap())
    .catch(error => console.error(error))
  },
  methods: {
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
      <p>Here's my map!</p>
    </section>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);