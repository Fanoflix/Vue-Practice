<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <button @click="subtractOne">Subtract 1</button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChanceCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  computed: {
    ChanceCounterounter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      // this.$store.state.counter += 11; //Intentional error. (Basically simulating a mistake where one component is change the state "counter" in a different way; adding 11 whereas another component ChangeCounter.vue is adding only 1).
      this.$store.commit('increment');
    },
    subtractOne() {
      this.$store.commit('decrement');
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
