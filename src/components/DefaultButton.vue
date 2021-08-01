<template>
  <Button :class="addClass" :style="changeColor">
    <span class="p-button-label">{{ label }}</span>
  </Button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: ['label', 'color', 'class'],
  computed: {
    addClass(){
      return "button-authentication " + this.class
    },
    changeColor(){
      return "background-color:" + this.color
    }
  }
}
</script>

<style scoped lang="scss">
.button-authentication {
  width: 90%;
  height: 43px;
}

.p-button-label {
  font-size: 20px;
}
</style>
