<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"

        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.number"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "A",
          name: "Ammar",
          number: "11123213",
          email: "fictional@gm.com",
          isFavourite: true,
        },
        {
          id: "B",
          name: "Some2",
          number: "asd",
          email: "haha@gm.com",
          isFavourite: false,
        },
        {
          id: "C",
          name: "Some3",
          number: "asdasd",
          email: "hahaga@gm.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendID) { // accepting the "this.id" we sent from the FriendContact.vue
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendID // In the array friends, find a friend whose .id is == to the friendID
      ); 
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
  },
};
</script>
