<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>

  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is Invalid!</h2>
      <p>Please provide atleast a few characters...</p>
      <button @click="confirmError">Ok</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value; // these dolalr sign methods are really handy. Pay a visit to the docs
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
