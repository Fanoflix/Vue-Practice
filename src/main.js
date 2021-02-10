import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/users', component: UsersList },
    { path: '/teams', component: TeamsList },
    // { path: '/teams/new' }, // if we had another /teams/something path, then we'll have to put it above the dynamic path, so.. above the route below.
    { path: '/teams/:teamID', component: TeamMembers} // We can make dynamic routes, by using the colon : to set  
  ],
  // We can provide additional configuration to our createRouter relating to the classes that are added to the active <router-link> element. These are the linkActiveClass and linkExactActiveClass as the key, and the value should be a string which you instead need to use as the CSS class name.
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
