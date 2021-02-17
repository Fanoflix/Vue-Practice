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
  props: ['teamID'],
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
    loadTeamMembers(teamID) {

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
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamID);
  },
  // beforeRouteUpdate(to, from, next) { // WE ALREADY HAVE THE WATCH LOGIC IN PLACE TO HANDLE THIS. SO JSUT READ THE DOCS AND THIS PIECE OF CODE TO SEE HOW THIS IS AN ALTERNATIVE TO WATCHING THE TEAMID!!
  //   console.log('Team Members Cmp beforeRouteUpdate');
  //   console.log(to, from);
  //   this.loadTeamMembers(to.params.teamID);
  //   next();
  // },
  watch: {
    teamID(newiID) {
      this.loadTeamMembers(newiID);
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
