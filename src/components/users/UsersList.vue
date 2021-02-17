<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      // do something (its a dummy example)
      // . . .
      // . . .
      //
      // Since we are using the vue-router, we have a special property available, this.$router('/path'):
      this.$router.push('/teams'); // Addind a new route to this routing memory the browser keeps. We'll be now redirected programaticalyl to /teams.
      // this.$router.back()
      // this.$router.forward()
    },

    saveChanges() {
      this.changesSaved = true;
      alert('Changes Saved!');
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('userslist beforeLogEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // The router calls this first before calling all the other beforeEach and beforeEnter guards.
    console.log('Users list Cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved == true) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You have unsaved changes!');
      next(userWantsToLeave); // userWantsToLeave is either true or false. So we are denying or allowing the navigation to occur.
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
