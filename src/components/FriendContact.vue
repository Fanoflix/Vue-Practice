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
  <button @click="$emit('delete-friend', id)">
      Delete
  </button>
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
        this.$emit('toggle-favourite', this.id);
    },
    // deleteFriend() {
    //     this.$emit('delete-friend') // If all we're doing in a function is emitting. Then we can just use emit on the tag itself where we added the eventListener
    // }
  },
};
</script>

<style>

</style>
