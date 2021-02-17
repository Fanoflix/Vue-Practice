import { createRouter, createWebHistory } from 'vue-router';

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
      {
        path: '/users',
        components: {
          default: UsersList,
          footer: UsersFooter
        },
        beforeEnter(to, from, next) { // Setting navigation guard for this specific route
          console.log('user beforeEnter');
          console.log(to, from);
          next();
        } 
      },
      {
        name: 'teams',
        path: '/teams',
        meta: {needsAuth: true}, // meta holds any kind of values in it. This is useful because we can access this meta field in every place where the $route object is available. So we can use it inside components, aswell as Navigation Guards. We can now use it in line 59 of main.js to check if the user is authenticated or not.
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
  
  router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);
  
    // USING METADATA HERE
    if (to.meta.needsAuth) {
      console.log('Needs Auth!');
    } else {
      next();
    }
  
    next();
  });
  
  router.afterEach( (to, from) => {
    console.log(to, from);
    console.log('This will be the last thing we see on every navigation action');
  });


  export default router;