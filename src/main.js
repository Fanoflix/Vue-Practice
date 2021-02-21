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
  },
  mutations: {
    // Here we define methods that mutate the states. Each method accepts state (to access the states above) and a payload; which can be any value or an object.
    increment(state, payload) { // 
      state.counter = state.counter + payload.value;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    }
  }
});
const app = createApp(App); 

app.use(store); // Using the store (Connecting app to store)
app.mount('#app');
