export default {
  name: 'App',
  data() {
    return {
      stuff: ["Banana", "Orange", "Apple"],
      selectedStuff: ''
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