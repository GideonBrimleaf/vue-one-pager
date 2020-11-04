### How to set up Vue in the smallest way possible

1. Set up a project with npm 
```mkdir <project-name>``` ```cd <project-name>``` ```npm i -y```
2. Create a project directory with the following structure, note ```package.json``` will already be created

```
package.json
public
  ├── app.js
  ├── index.html
  └── main.css
```

3. As per [this blog](https://markus.oberlehner.net/blog/goodbye-webpack-building-vue-applications-without-webpack/) we need Browsersync to create a little server to take advantage of the Vue's ES6 modules.  
```npm install browser-sync```
4. We can then add the Browsersync start command to our ```package.json``` file:

```
"scripts": {
    "start": "browser-sync start --server 'public' --files 'public' --single"
  }
```

5. Add the Vue CDN to your ```index.html``` file whilst also importing your ```app.js``` file.  Add an id to your main/body html element that you want Vue to hook into (here we create a ```div``` with an ```id``` of ```app``` which we will be referring to):

```
!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> <!-- Added -->
  <script src="/app.js" type="module"></script> <!-- Added -->
  <link rel="stylesheet" href="./main.css"> <!-- Added -->
  <title>Document</title>
</head>
<body>
  <div id="app">
  </div>
</body>
</html>
```

6. In ```app.js``` let's go ahead and create our Vue component and tell Vue to hook into the HTML element with the matching id:

```js
const App = {
  name: 'App',
  data() {
    return {
      stuff: ["someStuff", "someMoreStuff"],
      selectedStuff: ''
    }
  },
  template: `
    <div>
      <h1>This is a selector</h1>
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
```

7. Run the app with ```npm run start``` which will call the Browsersync command you added to your ```package.json``` file earlier. 
