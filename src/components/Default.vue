<template>

  <div class="p-grid p-ai-center vertical-container">

    <div class="p-col">
      <div class="p-d-flex p-jc-center">

        <div class="box-divider"></div>
        <img src="../assets/logo2.png" class="logo-image p-my-auto">
        <div class="box-divider"></div>

        <Card class="card-authentication" :style="'height: ${card_height}px'">
          <template #title>
            <slot name="title"></slot>
          </template>
          <template #content>
            <slot name="content"></slot>
          </template>
        </Card>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Default",
  props: ['card_height']
}
</script>

<style scoped lang="scss">
.vertical-container {
  height: 95vh;
}

@media only screen and (max-width: 1200px) {
  .logo-image, .box-divider {
    display: none;
  }
}

.logo-image {
  height: 300px;
  width: 300px;
}

.box-divider {
  width: 120px;
}

.card-authentication {
  background-color: #203572;
  margin: 0 5em 0 5em;
  border-radius: 25px;
  width: 420px;
}
</style>

