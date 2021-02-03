<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script> 
import TheHeader from './components/Layouts/TheHeader.vue';
import StoredResources from './components/Resources/StoredResources.vue';

export default {
  components: {
    StoredResources,
    TheHeader
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue JS documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The search Engine',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
