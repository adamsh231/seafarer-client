<template>
  <div class="p-grid p-ai-center vertical-container">

    <div class="p-col">
      <div class="p-d-flex p-jc-center">

        <div class="box-divider"></div>
        <img src="../assets/logo2.png" class="logo-image p-my-auto">
        <div class="box-divider"></div>

        <Card class="card-authentication">
          <template #title>
            <div class="p-text-center p-text-light text-white p-mt-4" style="font-size: 30px">Welcome to</div>
            <div class="p-text-center p-text-bold text-white p-mt-2" style="font-size: 28px">seafarindo.online</div>
          </template>
          <template #content>
            <div class="p-grid p-jc-center">
              <div class="p-col-12">
                <div class="p-d-flex p-jc-center">
                  <Button class="button-authentication p-mt-3" @click="$router.push('/sign-in')">
                    <span class="p-button-label">Sign In</span>
                  </Button>
                </div>
              </div>
              <div class="p-col-12">
                <div class="p-d-flex p-jc-center">
                  <Button label="Sign Up" class="button-authentication p-mt-2" style="background-color: #a5e0f3" @click="$router.push('/sign-up')">
                    <span class="p-button-label">Sign Up</span>
                  </Button>
                </div>
              </div>
            </div>
          </template>
        </Card>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped lang="scss">
.vertical-container {
  height: 100vh;
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
  height: 320px;
  width: 420px;
}

.text-white {
  color: white;
}

.button-authentication {
  width: 90%;
  height: 43px;
}

.p-button-label {
  font-size: 22px;
}
</style>
