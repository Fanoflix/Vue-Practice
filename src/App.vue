<template>
  <div class="container">
    <div class="block"></div>
    <button :class="{ animate: animatedBlock }" @click="changeState">
      Animate
    </button>
  </div>
  <div class="container">
    <transition>
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <!-- transition can only have one child element -->
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      paraIsVisible: false
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

/* .v-enter-from { */
  /* Here we define our starting state while entering*/
  /* opacity: 0;
  transform: translateY(-30px);
} */

.v-enter-active {
  /* */
  /* transition: all 0.5s ease-in; */
  animation: slide-scale 0.5s ease-out;
}
/* .v-enter-to { */
  /* Here we enter the final/end state while entering */
  /* opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0); */
/* } */

.v-leave-active {
  /* transition: all 0.5s ease-out; */
  animation: slide-scale 0.5s ease-out reverse;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

@keyframes slide-scale { /* If we're using keyframes, we don't need to use the -to and -from classes. */
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
