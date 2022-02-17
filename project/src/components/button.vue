<template>
  <button class="button" @click="$emit('button-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.button {
  width: 6rem;
  height: 2rem;
}
</style>