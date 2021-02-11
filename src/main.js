import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/users', component: UsersList },
    // All these routes were siblings to each other. We can setup nested routes, by adding a children option on the route config. children takes an array, and it takes an array of routes.
    { path: '/teams', component: TeamsList, children: [
      { path: ':teamID', component: TeamMembers, props:true}, // Here we don't need to repeat the entire path, we can just set the part after the /teams/
    ] },
    // { path: '/teams/new' },
    // { path: '/teams/:teamID', component: TeamMembers, props:true}, // We can now move this route and move it in the children of teams.
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
