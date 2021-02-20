import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // Create Store takes an object where we configure the store.
  state() {
    // state is a method, which returns the state object.
    return {
      counter: 0
    };
  }
});
const app = createApp(App); 

app.use(store); // Using the store
app.mount('#app');
