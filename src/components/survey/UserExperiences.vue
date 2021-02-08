<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && loadingFailed">
        {{ loadingFailed }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <!-- Checking 3 things: is not loading, results exists and is truthy (because in some apps this might not even be set if you fail to load data), and if results have some elements.-->
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      loadingFailed: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.loadingFailed = null;
      fetch('https://vue-http-demo-449f9-default-rtdb.firebaseio.com/surveys.json')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results;
        })
        .catch(error => {
          // If there is an error, we can handle it using the catch() method, which like then() methods is also connected to the long chain.
          console.log(error); // logging the error
          this.isLoading = false; // removing the isLoadinf flag.
          this.loadingFailed = 'Failed to fetch data - please try again!';
        });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
