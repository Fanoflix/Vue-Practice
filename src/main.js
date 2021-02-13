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
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

// Guards are functions that are called automatically by Vue router when a page changes, or to be precise, when a navigation action started.
router.beforeEach((to, from, next) => {
  // beforeEach takes a function as an arugment, which will be called by the vue router, whenever we navigate from one page to another. Before Each navigation action, this function will be called. This function takes 3 self-explanatory arguments. "next" is a function we have to call to wether confirm or cancel this navigation action. This part is what makes it a 'guard'
  console.log('Global beforeEach');
  // next(); // If we call next() like this, we allow all navigations.
  // next(false) // stops all navigation.
  // We can also pass a string with a route we wanna navigate to (one of the ones we registered above) OR such a naviagtion object.
  // if (to.name === 'team-members' ) {
  //   next();
  // } else {
  //   next({name: 'team-members', params: { teamID: 't2'} }); 
  // }
  next();
  
});

const app = createApp(App);

app.use(router);
app.mount('#app');
