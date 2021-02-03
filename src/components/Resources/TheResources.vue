<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>

</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
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
          resources: this.storedResources,
          addResource: this.addResource,
          deleteResource: this.removeResource
      }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, url) {
        const newResource = {
            id: new Date().toISOString(),
            title: title,
            description: description,
            link: url
        }

        this.storedResources.unshift(newResource);
        this.selectedTab = 'stored-resources'
    },
    removeResource(resID) {
        const resIndex = this.storedResources.findIndex(res => res.id === resID);
        this.storedResources.splice(resIndex, 1);
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
