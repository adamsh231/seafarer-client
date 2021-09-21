<template>
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
            <DefaultButton label="Sign In" @click="signIn" :disabled="disabled"/>
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
      disabled: false
    }
  },
  created() {
      this.noTokenOnlyArea()
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["email", "password"]
      let isValid = true

      // add class invalid
      field.forEach(value => {
        if (document.getElementById(value).value === "") {
          isValid = false
          document.getElementById(value).classList.add(invalid)
        }
      })

      return isValid
    },
    signIn() {
      // validate form
      let isValid = this.validate()

      const context = this
      if (isValid) {

        // disable button login
        context.disabled = true

        // login api
        let url = `${context.apiAuthUrl}/user/login`
        let data = {
          email: this.email,
          password: this.password
        }
        axios.post(url, data).then(function (response) {

          // show toast
          context.showToast(context.toastSeveritySuccess, response.data.message, context.toastDefaultLife)

          // store token
          context.setCookie(context.tokenCookie, response.data.data[context.tokenCookie])
          context.setCookie(context.refreshTokenCookie, response.data.data[context.refreshTokenCookie])

          // redirect to verify
          context.$router.replace("/dashboard")

        }).catch(function (error) {
          try {
            if (error.response.data.message.includes(context.notFoundMessage) || error.response.data.message.includes(context.credentialMessage)) {

              // credential doesn't match
              context.showToast(context.toastSeverityError, context.credentialIsNotMatchMessage, context.toastDefaultLife)

            } else {

              // unknown error
              context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

            }
          } catch (e) {

            // server error
            context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

          }
        }).then(function () {

          // enable button login
          context.disabled = false

        })

      } else {

        // not valid form
        context.showToast(context.toastSeverityError, context.incompleteFormMessage, context.toastDefaultLife)

      }


    }

  }
}
</script>
