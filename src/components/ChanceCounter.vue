<template>
  <br />
  <button @click="addOne">Add 1</button>
  <button @click="subtractOne">Subtract 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment'); // Calling the mutation
    },
    subtractOne() {
      this.$store.commit('decrement');
    }
  }
};
</script>
