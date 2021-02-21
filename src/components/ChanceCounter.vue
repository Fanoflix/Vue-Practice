<template>
  <br />
  <button @click="addOne">Add 1</button>
  <button @click="subtractOne">Subtract 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment', {value: 10}); // Calling the mutation
    },
    subtractOne() {
    //   this.$store.commit('decrement', {value: 5});
    // ALTERNATE WAY TO COMMIT
    this.$store.commit({
        type: 'decrement',
        value: 10, 
    })
    // In the second way, the name of the mutation and the payload are wrapped into an object.
    }
  }
};
</script>
