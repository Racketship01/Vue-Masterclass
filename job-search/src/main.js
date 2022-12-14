import { createApp } from "vue"; //importing a function from the Vue library called Create App that is a named export

//Global component --from installed fontawesome package
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // font-awesome vue component --FontAwesomeIcon is the magic that renders icons in our Vue projects.
import { library } from "@fortawesome/fontawesome-svg-core"; // importing a library --collection of available icons then register any icon we want to use in this library
import {
  faAngleDown,
  faAngleUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"; //import actual icon that want to make globally available then add to library

// App Component
import App from "@/App.vue"; //importing the root component from vue file
import "@/assets/tailwind.css"; //importing tailwind package
import router from "@/router"; // node will look for a file called index.js then import by default at the router folder
import store from "@/store"; // vuex store

library.add(faAngleDown);
library.add(faAngleUp);
library.add(faSearch); // adding/registering icon to the library but not yet connected to the vue

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app"); //connect library to actual vue app by adding component method (register a global component within the whole vue app) before mount method then invoke it. And then call mount method on the return value --NOTE: special design pattern in vue --the methods that are available on this vue object will always return the same object itself. And the benefit of that design is that we can invoke as many methods in a row and we're can rest assured that we're always getting the same vue app object back which allows to call mount on it same as before

// .use(router) --vue router library gives us some component (e.g router-view component at App.vue file) and it registers it globally

// createApp(App).mount("#app"); //pass in as argument the root component(App) to the Vue App (created by the createApp function) So that vue App knows that it's going to take that app component and inject it or mounted it to the HTML element (ID selector in order to target specific div) to rendering the app component to the browser.And that's how these two files are connected to each other.(NOTE: app is our picture while HTML file is our wall)
