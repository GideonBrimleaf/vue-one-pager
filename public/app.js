const App = {
  name: 'App',
  data() {
    return {
      stuff: ["banana", "orange", "apple"],
      selectedStuff: ''
    }
  },
  template: `
    <section>
      <h1>My Amazing Selector!</h1>
      <select v-model="selectedStuff">
        <option value="" disabled>Select a Thing:</option>
        <option v-for="thing in this.stuff">{{thing}}</option>
      </select>
    </section>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);