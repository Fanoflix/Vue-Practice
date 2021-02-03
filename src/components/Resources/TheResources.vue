<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
    :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" 
    :mode="addResButtonMode"
      >Add Resource</base-button> <!-- Adding an event listener to a custom component, will make the listener "fall through" to the root level element of the component. In this case, the @click will fall through and be applied to the root level element of the base-button component, which basically is the <button> tag-->
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  },
  provide() { // Providing storedResources to all lower level components
      return {
          resources: this.storedResources
      }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  },
  computed: {
      storedResButtonMode() {
          return this.selectedTab == 'stored-resources' ? null : 'flat'
      },
      addResButtonMode() {
          return this.selectedTab == 'add-resource' ? null : 'flat'
      }
  }
};
</script>
