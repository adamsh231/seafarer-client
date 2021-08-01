<template>

  <Default>
    <template v-slot:title>
      <div class="p-text-center p-text-light text-white p-mt-4" style="font-size: 30px">New Password</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="new-password" class="input-text" type="password" v-model="password"/>
              <label for="new-password">New Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="confirm-new-password" class="input-text" type="password" v-model="confirmPassword"/>
              <label for="confirm-new-password">Confirm New Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Update" @click="update"/>
          </div>
        </div>
      </div>
      <div class="p-col-12">
        <hr class="text-white p-mx-2"/>
      </div>
      <div class="p-col-12">
        <div class="p-d-flex p-jc-center">
          <DefaultButton class="p-button-danger" style="width: 95%" label="Cancel" @click="cancel"/>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../../components/Default";
import BackButton from "../../components/BackButton";
import DefaultButton from "../../components/DefaultButton";
import axios from "axios";

export default {
  name: "PasswordRecover",
  components: {
    Default,
    BackButton,
    DefaultButton
  },
  data() {
    return {
      password: "",
      confirmPassword: ""
    }
  },
  created() {
    const context = this
    if (context.getCookie(context.recoverTokenCookie) === undefined) {
      context.$router.replace('/')
    }
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["new-password", "confirm-new-password"]
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
    update() {
      const context = this
      let isValid = this.validate()

      if (isValid) {

        // current user api
        let url = `${context.apiAuthUrl}/recover/password`
        let data = {
          password: context.password,
          confirm_password: context.confirmPassword
        }
        let header = {
          headers: {
            Authorization: `Bearer ${context.getCookie(context.recoverTokenCookie)}`,
          }
        }
        axios.post(url, data, header).then(function (response){

          // show toast
          context.showToast(context.toastSeveritySuccess, response.data.message, context.toastDefaultLife)

          // delete cookie
          context.deleteCookie(context.recoverTokenCookie)
          context.$router.replace('/sign-in')

        }).catch(function (error){
          try {
            if (error.response.data.message.includes(context.confirmNotMatchMessage)) {

              // not match password
              context.showToast(context.toastSeverityError, context.passwordAndConfirmDoesNotMatchMessage, context.toastDefaultLife)

            } else {

              // false token redirect
              context.deleteCookie(context.recoverTokenCookie)
              context.$router.replace('/')

            }
          } catch (e) {

            // unknown redirect
            context.$router.replace('/error')
            context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

          }
        })

      } else {

        // not valid form
        context.showToast(context.toastSeverityError, context.incompleteFormMessage, context.toastDefaultLife)

      }
    },
    cancel(){
      const context = this

      // delete cookie
      context.deleteCookie(context.recoverTokenCookie)
      context.$router.replace('/')
    }
  }
}
</script>
