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
    // { path: '/teams/new' },
    { path: '/teams/:teamID', component: TeamMembers, props:true} // props: true tells the vue-router, that the dynamic param should be passed into this component as props, rather than just on the $route property. So now: teamID here, is the prop. And you can just use the props: [] property in the script tag of the component itself. So this is always the better way.
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
