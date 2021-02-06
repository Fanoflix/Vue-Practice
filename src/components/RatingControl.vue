<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">
        Poor
      </button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">
        Average
      </button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], // This component receives 'rating' as prop into 'modelValue'
  emits: ['update:modelValue'], // And you MUST emit 'update:modelValue' to send back the data that whatever changes that occured. This is the complete ritual to make v-model work with custom components. Emitting below::
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option); // emitting here
    }
  }
  // The names "modelValue" for the prop, and "update:modelValue" for the emitted event, MUST NOT be changed. They are introduced in Vue3 and were previously something else.
};
</script>

<style scoped>
.active {
  border-color: red;
}

.active button {
  color: red;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid gray;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
