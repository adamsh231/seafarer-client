<template>

  <div class="p-grid p-ai-center vertical-container">

    <div class="p-col">
      <div class="p-d-flex p-jc-center">

        <div class="box-divider"></div>
        <img src="../assets/logo2.png" class="logo-image p-my-auto">
        <div class="box-divider"></div>

        <Card class="card-authentication">
          <template #title>
            <i class="pi pi-arrow-left text-white" @click="$router.push('/')"/>
            <div class="p-text-center p-text-light text-white" style="font-size: 30px">Sign Up</div>
          </template>
          <template #content>
            <div class="p-grid p-jc-center">
              <div class="p-col-12 p-mt-3">
                <div class="p-d-flex p-jc-center">
                  <span class="p-float-label button-authentication">
                    <InputText id="full_name" class="input-authentication" type="text"/>
                    <label for="full_name">Full Name</label>
                  </span>
                </div>
              </div>
              <div class="p-col-12 p-mt-3">
                <div class="p-d-flex p-jc-center">
                  <span class="p-float-label button-authentication">
                    <InputText id="email" class="input-authentication" type="text"/>
                    <label for="email">Email</label>
                  </span>
                </div>
              </div>
              <div class="p-col-12 p-mt-3">
                <div class="p-d-flex p-jc-center">
                  <span class="p-float-label button-authentication">
                    <InputText id="password" class="input-authentication" type="text"/>
                    <label for="password">Password</label>
                  </span>
                </div>
              </div>
              <div class="p-col-12 p-mt-3">
                <div class="p-d-flex p-jc-center">
                  <Button class="button-authentication" style="background-color: #a5e0f3">
                    <span class="p-button-label" >Sign Up</span>
                  </Button>
                </div>
              </div>
              <div class="p-col-12 p-mt-3">
                <div class="p-text-center text-white p-text-light">By signing up you accept our</div>
                <div class="p-text-center text-white p-text-bold p-mt-3" style="cursor:pointer;">Term of Services</div>
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
  name: "SignUp"
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
  height: 520px;
  width: 420px;
}

.text-white {
  color: white;
}

.button-authentication {
  width: 90%;
  height: 43px;
}

.input-authentication {
  width: 100%;
  height: 43px;
}

.p-button-label {
  font-size: 22px;
}

.pi-arrow-left {
  font-size: 2rem;
  cursor: pointer;
}
</style>

