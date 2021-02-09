import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(), // import createWebHistory function. JS wasnt able to manipulate browser's memory (couldnt store history) so JS had to emulate. But now we can just use this function to do it.
  routes: [// in routes, we pass JS objects in an array
    { path: '/teams', component: TeamsList }, // We want to load the TeamsList component in this route, so we need to improt it.
    { path: '/users', component: UsersList }
  ]
}); // Create router needs information, about which different routes/URLS we wanna support and we can also setup more things.

const app = createApp(App);

app.use(router); // use() is a built in function that allows to connect our vue app with some thirdparty package. Here we pass the router to make vue aware of these routes.
app.mount('#app');
