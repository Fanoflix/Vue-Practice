<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button> <!-- activateTopic is expecting an argument. Hence we need to pass the id here. Because selectTopic is basically activateTopic-->
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'], //selectTopic is a function
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>