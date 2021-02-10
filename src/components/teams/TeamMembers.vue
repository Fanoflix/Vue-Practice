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
    <router-link to="/teams/t2">Go to T2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(route) {
      
      console.log(this.$route);
      // const teamID = this.$route.params.teamID;
      const teamID = route.params.teamID;

      // Note: each team, just has a bunch of userIDs
      // { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
      const selectedTeam = this.teams.find(team => team.id === teamID);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.$route);
  },
  watch: {
    // Whenever the URL changes, one important thing changes, the $route changes. It holds the latest information about the laoded route. So this $route will always hold the latest parameter for example.
    // So we can watch for it: 
    $route(newRoute) {
      this.loadTeamMembers(newRoute); // Recall: watchers receive the new value as the first argument, and the old value as the 2nd argument.
    }
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
