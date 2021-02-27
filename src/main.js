import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  // Separating the counter login in another module. So our main store remains clean. (Note that we didnt use createStore method here)
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    }
  },
  actions: {
    increment(context, payload) {
      console.log(context);
      setTimeout(() => {
        context.commit('increment', payload);
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  }
};

const store = createStore({
  modules: {
    numbers: counterModule // Merging the separated module into the store. So that we can use the counterModule as a store.
  },
  // Create Store takes an object where we configure the store.
  state() {
    // state is a method, which returns the state object.
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    // Here we define methods that mutate the states. Each method accepts state (to access the states above) and a payload; which can be any value or an object.
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  getters: {
    // This is just like a computed property of a component. Each getter receives a state and a getters argument. The getters argument can be used to call other getters.
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  },
  actions: {
    // Actions should be in between the components and the mutations. Actions allow asynchronous code. Each action takes in an object which you can name 'context'.
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  }
});
const app = createApp(App);

app.use(store); // Using the store (Connecting app to store)
app.mount('#app');
