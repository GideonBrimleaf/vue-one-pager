const App = {
  name: 'App',
  data() {
    return {
      map: null
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
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
    }
  },
  template: `
    <section class="map">
    </section>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);