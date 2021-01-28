<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        name="Ammar Nasir"
        phone-number="0132 1231 123"
        email-address="some1@some.com"
        is-favourite="1"
      ></friend-contact>
      <friend-contact
        name="Some2 Some2"
        phone-number="0213132 1231 123"
        email-address="some2@some.com"
        is-favourite="0"
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
          id: "Ammar",
          number: "11123213",
          email: "fictional@gm.com",
        },
        {
          id: "test",
          number: "asd",
          email: "haha@gm.com",
        },
      ],
    };
  },
};
</script>
