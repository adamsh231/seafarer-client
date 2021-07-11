<template>
  <Toast/>
  <Default>
    <template v-slot:title>
      <BackButton to="/"/>
      <div class="p-text-center p-text-light text-white" style="font-size: 30px">Sign In</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="email" v-model="email" class="input-text"/>
              <label for="email">Email</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="password" v-model="password" class="input-text" type="password"/>
              <label for="password">Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Sign In" @click="signIn()"/>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-text-center text-white p-text-bold" style="cursor:pointer;" @click="$router.push('/recover/email')">Forgot Password?</div>
        </div>
      </div>
    </template>
  </Default>
</template>

<script>
import Default from "../components/Default";
import BackButton from "../components/BackButton";
import DefaultButton from "../components/DefaultButton";
import axios from "axios";

export default {
  name: "SignIn",
  components: {
    Default,
    BackButton,
    DefaultButton
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn() {
      let toast = this.$toast
      axios.post('http://localhost:3000/authentication/v1/auth/login', {
        email: this.email,
        password: this.password
      }).then(function (response) {
        let data = response.data
        document.cookie = "token="+data.data.token
        document.cookie = "refresh_token="+data.data.token
        toast.add({severity:'success', summary: 'Success', detail: data.message, life: 1000})
      }).catch(function (error) {
        toast.add({severity:'error', summary: 'Error', detail: error.response.data.message, life: 1000})
      })
    }

  }
}
</script>
