<template>
  <li>
    <h2>{{ name }} {{ friendIsFavourite == true ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite"> \/</button>
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
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavourite',
    // ],
    props: {
        //name: String, // We can just specify the type of the prop we expect or we could add extra details, like below:
        name: {
            type: String, // this prop should be of type string
            required: true // it is required to be sent from App.vue (helps in development)
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
            required: false, // This prop is not required
            default: false, // The default value if this prop is not provided,
            // the default config
            validator: (value) => { // the 'value' here is the value of the prop, just so we can use that in the function.
                return value === '1' || value === '0'; // Just making sure that isFavourite is either a 1 or a 0
            }
        },
    },
  data() {
    return {
      detailsVisibility: false,
      friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    },
    toggleFavourite() {
        this.$emit('toggle-favourite'); // Use kebab-case for (1)sending props and (2)events, and camelCase for (3)receiviing props
        // We can now listen to this custom event in the App.vue file, using v-on: or @togglee-favourite="<Any javascript code here>"
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
