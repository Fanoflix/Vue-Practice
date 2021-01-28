import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue'

const app = createApp(App).mount('#app');

app.component('friend-contact', FriendContact); // The tag name should be a two word with a dash in between
app.component('new-friend', NewFriend); 
app.mount('#app');
