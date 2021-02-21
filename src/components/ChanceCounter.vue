<template>
  <br />
  <button @click="addOne">Some Add 1</button>
  <button @click="subtractOne">Some Subtract 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment', {value: 10}); // Calling the mutation
    },
    subtractOne() {
    // ALTERNATE WAY TO COMMIT
    this.$store.commit({
        type: 'decrement',
        value: 10, 
    })
    }
  }
};
</script>
