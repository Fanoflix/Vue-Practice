<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'], // Injecting here. (These are provided in App.vue) we're using these below in the created() hook at line 28.
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  created() {
    // Another special property which is available. The this.$route (different from this.$router) This is available to this component, because this component is loaded through the router (in main.js)
    console.log(this.$$route);
    const teamID = this.$route.params.teamID // #route has a the params property, which: holds all the parameters that were used to get to this page. And we currently only have 1 param that was used, which was the 'teamID' (from main.js) We'll use the same name as the one provided in the main.js router.

    // Below is the logic for extracting the team from the teams array, by using the ID provided through the URL. Then making an empty array, and then extracting all the users from the selected team one by one and pushing each user to this empty array.
     
    // Note: each team, just has a bunch of userIDs:
    // { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
    const selectedTeam = this.teams.find(team=> team.id === teamID); // find is a JS function that iterates through each element. So here, its iterating on the teams array, and for each team in teams we're checking if the team.id === teamID, and it then returns that element if the expression is true.
    const members = selectedTeam.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find(user => user.id === member);
      selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
    
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>