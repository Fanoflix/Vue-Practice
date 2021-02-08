<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
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
      results: []
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        'https://vue-http-demo-449f9-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(response => {
          if (response.ok) {
            // response has an ok property which indicates that the request was successful or not. If its ok, then we can work on the data:
            // response has various methods for that;
            // (1) .json() which will parse the data thats part of the response if its in JSON format.
            return response.json();
          }
        })
        .then(data => {
          // Another then() method after that first then(). This one will be trigerred when this return promise is done. The argument this then() receives is the data that the response.json yielded. Kind of common sense.
          // console.log(data); // This logged the data from our database over at google 9.9 Now we just need to add it to the results[] array.

          // We cant add an object directly to an array, so we need to do this: 
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }

          this.results = results; // setting the Vue "results" variable equal to our temporary results variable from line 52. For this line to work, you have to make sure to use Arrow functions, rather than the function() {} syntax. BECAUSE, if you use the normal function() syntax, the meaning of the "this." keyword changes. If you use arrow functions on the other hand,  "this." means the same thing inside as outside of the function.
        });
    }
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
