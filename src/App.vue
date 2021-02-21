<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">App Add 1</button>
    <button @click="subtractOne">App Subtract 1</button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChanceCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue
  },
  computed: {
    ChanceCounterounter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment', {value: 5});
    },
    subtractOne() {
      this.$store.commit('decrement', {value: 10});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
