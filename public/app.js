const App = {
  name: 'App',
  data() {
    return {
      stuff: ["banana", "orange", "apple"],
      selectedStuff: ''
    }
  },
  template: `
    <div>
      <h1>I'm Mary Poppins Y'All!</h1>
      <select v-model="selectedStuff">
        <option value="" disabled>Select a Thing:</option>
        <option v-for="thing in this.stuff">{{thing}}</option>
      </select>
    </div>
  `,
};

new Vue({
  render: h => h(App),
}).$mount(`#app`);