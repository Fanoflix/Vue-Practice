<template>
  <br />
  <button @click="increment({value: 10})">Some Add 1</button>
  <button @click="decrement({value: 10})">Some Subtract 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment', { value: 10 }); // Calling the mutation
    // },
    // subtractOne() {
    //   // ALTERNATE WAY TO COMMIT
    //   this.$store.commit({
    //     type: 'decrement',
    //     value: 10
    //   });
    // },

    // All the above lines of code is wrapped in the mapActions.. <3
    ...mapActions(['increment', 'decrement']) // For the payload, we pass the payload object or variable as arguments in the html section.
  }
};
</script>
