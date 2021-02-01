<template>
    <div>
        <header>
          <slot name="header"></slot> <!-- You don't need to name every slot -->
        </header>
        <slot></slot> <!-- There can only be ONE unnamed slot. -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>