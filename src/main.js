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
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamID',
          component: TeamMembers,
          props: true
        }
      ]
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
  scrollBehavior(to, from, savedPosition) {
    // Scrollbehavioru is a method, which will be called, whenever our page changes. It receives 3 arguments, to from, savedPosition
    console.log(to, from, savedPosition); // savedPosition is the scroll position we had on the page before we went backward.

    if (savedPosition) { // (2) If savePosition exists we go to that position. If savePosition is null, we jump to the top. So basically, whenever we click "back" we'll always be returned to our last savedPosition instead of aalways ending at the top (which was the behaviour when we only added (1) )
      return savedPosition;
    }

    return { left:0, top: 0} // (1) If we always return this, we will always scrolled 0 px from the top (so at the top) whenever the page changes
  }
});

const app = createApp(App);

app.use(router);
app.mount('#app');
