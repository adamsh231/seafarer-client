<template>
  <i class="pi pi-arrow-left text-white" @click="$router.push(to)"/>
</template>

<script>
export default {
  name: "BackButton",
  props: ['to']
}
</script>

<style scoped>
.pi-arrow-left {
  font-size: 2rem;
  cursor: pointer;
}
</style>
