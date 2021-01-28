<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite"> +</button>
    <button @click="toggleDetails">
      {{ detailsVisibility ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisibility">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ['toggle-favourite'],
    // emits: {
    //     'toggle-favourite': (id) => {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('id is missing')
    //             return false;
    //         }
    //     }
    // },
  data() { 
    return {
      detailsVisibility: false,
    };
  },
  methods: { 
    toggleDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    },
    toggleFavourite() {
        this.$emit('toggle-favourite', this.id); // Use kebab-case for (1)sending props and (2)events, and camelCase for (3)receiviing props
        // We can now listen to this custom event in the App.vue file, using v-on: or @togglee-favourite="<Any javascript code here>"
        // The first argument in the this.$emit() function is the custom event name, the rest are the extra data that we can/want to send.
        // this.id is avaiable to us because Remember: Props can be used as data properties using this.propname but they cannot be assigned values.
    }
  },
};
</script>

<style>

</style>
