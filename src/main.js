import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // Create Store takes an object where we configure the store.
  state() {
    // state is a method, which returns the state object.
    return {
      counter: 0 // We can now use this whole state in any component of this entire app. By {{ $store.state.counter }}
    };
  },
  mutations: {
    increment(state) { // 
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  }
});
const app = createApp(App); 

app.use(store); // Using the store (Connecting app to store)
app.mount('#app');
