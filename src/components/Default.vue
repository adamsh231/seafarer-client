<template>

  <div class="p-grid p-ai-center vertical-container">

    <div class="p-col">
      <div class="p-d-flex p-jc-center">

        <div class="box-divider"></div>
        <img src="../assets/logo2.png" class="logo-image p-my-auto">
        <div class="box-divider"></div>

        <Card class="card-authentication">
          <template #title>
            <slot name="title"></slot>
            <img src="../assets/logo2.png" class="logo-image p-my-auto">
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

  .card-authentication{
    .logo-image{
      width: 150px;
      height: 150px;
      margin:  auto;
      margin-top: 10% !important;
      display: block !important;
    }
  }
}

@media only screen and (max-width: 800px) {
  .logo-image, .box-divider {
    display: none;
  }

  .card-authentication {
    margin: 10% 0 !important;
    width: 400px !important;
  }

  .vertical-container {
    display: block;
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

  .logo-image{
    display: none;
  }

}
</style>

