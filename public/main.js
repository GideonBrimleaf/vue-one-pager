import MapView from './components/map.js'

const App = {
  name: 'App',
  data() {
    return {
      stuff: ["Banana", "Orange", "Apple"],
      selectedStuff: ''
    }
  },
  components: {
    'map-view': MapView
  },
  template: `
    <main>
      <h1>My Amazing Selector!</h1>
      <select v-model="selectedStuff">
        <option value="" selected="selected" disabled>Select a Thing:</option>
        <option v-for="thing in this.stuff">{{thing}}</option>
      </select>
      <map-view></map-view>
    </main>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);