import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/users', components: {default: UsersList, footer: UsersFooter} }, 
    {
      name: 'teams',
      path: '/teams',
      components:{ default: TeamsList, footer: TeamsFooter }, // keys identify different router views, and the values are the components that should be loaded. "default" corresponds to unnamed router-view
      children: [
        {
          name: 'team-members',
          path: ':teamID',
          component: TeamMembers, 
          props: true
        }
      ]
    },
    { path: '/:notFound(.*)', component: NotFound } // Any route with just 'component' (without the 's') will be caught by the unname route. So if we enter an invalid URL, we'll only be shown the 'NotFound' Component.
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive'
});

const app = createApp(App);

app.use(router);
app.mount('#app');
