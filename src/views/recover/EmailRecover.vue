<template>
  <Default>
    <template v-slot:title>
      <div class="p-text-center p-text-light text-white p-mt-3" style="font-size: 30px">Password Recovery</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="email" class="input-text" v-model="email" type="email"/>
              <label for="email">Email</label>
            </span>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Recover" @click="recover" :disabled="disabled"/>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-text-center text-gray">
            Back to
            <span class="text-white p-text-bold" style="cursor:pointer;" @click="$router.push('/sign-in')">Sign In</span>
          </div>
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
  name: "EmailRecover",
  components: {
    Default,
    BackButton,
    DefaultButton
  },
  created() {
    this.noTokenOnlyArea()
  },
  data() {
    return {
      disabled: false,
      email: ""
    }
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["email"]
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
    recover() {

      const context = this

      if (this.validate()) {

        // redirect to recover otp
        this.$router.push(`/recover/otp/${this.email}`)

      } else {

        // not valid form
        context.showToast(context.toastSeverityError, context.incompleteFormMessage, context.toastDefaultLife)

      }

    }
  }
}
</script>

<style scoped>

</style>
