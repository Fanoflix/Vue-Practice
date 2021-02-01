<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- The above method of rendering components according to certain condition is repititive, and may not be feasible for multiple componnets -->
    <!-- Therefore we use Dynamic Components -->

    <component :is="selectedComponent"></component> <!-- binding the is property. -->
    <!-- Same behaviour as above and way less code to right. -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"; // Registering Locally
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ActiveGoals from "./components/ActiveGoals";
import ManageGoals from "./components/ManageGoals";

export default {
  components: {
    // Registering Locally
    "the-header": TheHeader, //(1) key is the custom tag that we want, and the value is what we imported.
    // TheHeader: TheHeader, //(2) We can use this aswell. And then use TheHeader as the tag in the template (and now you can also use the self closing tags: <TheHeader /> which doesnt work if we use the key value method)
    // TheHeader, // (3) This will also work, this basically means (2) but is shorter. In modern Javascript, just a key means "key: key" so here, this basically means TheHeader: TheHeader
    // BadgeList,
    // UserInfo,
    ManageGoals,
    ActiveGoals,
  },
  ManageGoals,
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
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
