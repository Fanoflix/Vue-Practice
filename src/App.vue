<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'; // Registering Locally
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: { // Registering Locally
    'the-header': TheHeader, //(1) key is the custom tag that we want, and the value is what we imported.
    // TheHeader: TheHeader, //(2) We can use this aswell. And then use TheHeader as the tag in the template (and now you can also use the self closing tags: <TheHeader /> which doesnt work if we use the key value method)
    // TheHeader, // (3) This will also work, this basically means (2) but is shorter. In modern Javascript, just a key means "key: key" so here, this basically means TheHeader: TheHeader
    BadgeList,
    UserInfo,

  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>