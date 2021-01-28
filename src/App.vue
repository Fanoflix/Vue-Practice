<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.number"
        :email-address="friend.email"
        :is-favourite="true" 
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
        },
        {
          id: "B",
          name: "Some2",
          number: "asd",
          email: "haha@gm.com",
        },{
          id: "C",
          name: "Some3",
          number: "asdasd",
          email: "hahaga@gm.com",
        },
      ],
    };
  },
};
</script>
