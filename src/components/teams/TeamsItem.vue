<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>

    <router-link :to="teamMembersLink">View Members</router-link>
    <!-- Both of the above lines work the same. -->
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id;
      return {
        // path: '/teams' + this.id //We can set the path proerty in this object.
        name: 'team-members', params: {teamID: this.id} // instead we can use the name property we defined in main.js. We also have to set the params option. This is all done to make defining routed less cumbersome in huge apps.
      }
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
  margin-left: 2px;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
