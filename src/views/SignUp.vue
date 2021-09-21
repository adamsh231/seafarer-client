<template>
  <Default>
    <template v-slot:title>
      <BackButton to="/"/>
      <div class="p-text-center p-text-light text-white" style="font-size: 30px">Sign Up</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="full_name" v-model="fullName" class="input-text"/>
              <label for="full_name">Full Name</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="email" v-model="email" aria-describedby="username2-help" class="input-text" type="email"/>
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
            <DefaultButton label="Sign Up" color="#a5e0f3" @click="signUp" :disabled="disabled"/>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-text-center text-gray p-text-light">By signing up you accept our</div>
          <div class="p-text-center text-white p-text-bold p-mt-3" style="cursor:pointer;">Term of Services</div>
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
  name: "SignUp",
  components: {
    Default,
    BackButton,
    DefaultButton
  },
  data() {
    return {
      fullName: "",
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
      let field = ["full_name", "email", "password"]
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
    signUp() {
      // validate form
      let isValid = this.validate()

      const context = this
      if (isValid) {

        // disable button register
        context.disabled = true

        // register api
        let url = `${context.apiAuthUrl}/user/register`
        let data = {
          name: this.fullName,
          email: this.email,
          password: this.password,
          company_id: context.companyID,
        }
        console.log(data)
        axios.post(url, data).then(function (response) {

          // show toast
          context.showToast(context.toastSeveritySuccess, response.data.message, context.toastDefaultLife)

          // store token
          context.setCookie(context.tokenCookie, response.data.data[context.tokenCookie])
          context.setCookie(context.refreshTokenCookie, response.data.data[context.refreshTokenCookie])

          // redirect to verify
          context.$router.replace("/verify")

        }).catch(function (error) {
          try {
            if (error.response.data.message.includes(context.duplicateMessage)) {

              // email is exist
              context.showToast(context.toastSeverityError, context.emailAlreadyTakenMessage, context.toastDefaultLife)

            } else {

              // unknown error
              context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

            }
          } catch (e) {

            // server error
            context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

          }
        }).then(function (){

          // enable button register
          context.disabled = false

        })

      }else{

        // not valid form
        context.showToast(context.toastSeverityError, context.incompleteFormMessage, context.toastDefaultLife)

      }
    }
  }
}
</script>

