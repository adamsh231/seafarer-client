<template>
  <Default>
    <template v-slot:title>
      <div class="p-text-bold text-white p-mt-3 p-ml-4" style="font-size: 30px">Recovery Code</div>
      <div class="p-text-light text-gray p-mt-3 p-ml-4" style="font-size: 17px">Please enter 4 digit code</div>
      <div class="p-text-light text-gray p-mt-2 p-ml-4" style="font-size: 17px">Sent to your email</div>
    </template>
    <template v-slot:content>
      <div class="p-d-flex p-jc-center p-mx-1">
        <InputText class="input-otp" maxlength="1" id="input-verify-otp-0" @input="validateAndNext(0, $event)"/>
        <InputText class="input-otp" maxlength="1" id="input-verify-otp-1" @input="validateAndNext(1, $event)"/>
        <InputText class="input-otp" maxlength="1" id="input-verify-otp-2" @input="validateAndNext(2, $event)"/>
        <InputText class="input-otp" maxlength="1" id="input-verify-otp-3" @input="validateAndNext(3, $event)"/>
      </div>
      <div class="p-col-12 p-mt-3">
        <div class="p-d-flex p-jc-center">
          <DefaultButton label="Submit" style="width: 95%" :disabled="disabled" @click="verify"/>
        </div>
      </div>
      <div class="p-grid p-mt-3">
        <div class="p-col">
          <div class="p-text-center text-gray p-text-light">Not received code?</div>
        </div>
        <div class="p-col-5 p-offset-1">
          <div class="text-white p-text-right p-text-bold p-mr-3" style="cursor:pointer;" @click="resend">Resend</div>
        </div>
      </div>
      <div class="p-col-12">
        <hr class="text-white p-mx-2"/>
      </div>
      <div class="p-col-12" style="cursor: pointer">
        <div class="p-text-center text-gray p-text-light" @click="$router.push('/recover/email')">
          <i class="pi pi-arrow-left text-white"/>
          <span class="text-white p-text-normal"> Return to recover email form </span>
        </div>
      </div>
    </template>
  </Default>
</template>

<script>
import Default from "../../components/Default";
import DefaultButton from "../../components/DefaultButton";
import BackButton from "../../components/BackButton";
import axios from "axios";

export default {
  name: "OTPRecover",
  components: {
    Default,
    DefaultButton,
    BackButton
  },
  data() {
    return {
      email: this.$route.params.email,
      otp: [],
      otpLength: 4,
      disabled: true,
      canResend: true,
      resendWaitTime: 30
    }
  },
  created() {
    this.noTokenOnlyArea()
  },
  methods: {
    validateAndNext(id, event) {

      // next and validate nan
      let currentInput = document.getElementById(event.target.id)
      if (event.target.nextSibling !== null) {
        let nextInput = document.getElementById(event.target.nextSibling.id)
        if (isNaN(currentInput.value) || currentInput.value === "") {
          this.otp[id] = undefined
          currentInput.value = ""
        } else if (currentInput.value !== "") {
          this.otp[id] = currentInput.value
          nextInput.focus()
        }
      } else {
        if (isNaN(currentInput.value) || currentInput.value === "") {
          this.otp[id] = undefined
          currentInput.value = ""
        } else if (currentInput.value !== "") {
          this.otp[id] = currentInput.value
          currentInput.blur()
        }
      }

      // enable button submit
      this.enabledButtonSubmit()

    },
    enabledButtonSubmit() {

      // enable button submit
      let isEmpty = false
      for (let i = 0; i < this.otpLength; i++) {
        if (this.otp[i] === undefined) {
          isEmpty = true
          break
        }
      }
      this.disabled = isEmpty

    },
    verify() {

      // verify api
      const context = this
      let url = `${context.apiUrl}/recover/otp`
      let data = {
        otp: this.otp.join(""),
        email: this.email
      }
      axios.post(url, data).then(function (response) {

        // show toast
        context.showToast(context.toastSeveritySuccess, response.data.message, context.toastDefaultLife)

        // store token
        context.setCookie(context.recoverTokenCookie, response.data.data[context.tokenCookie])

        // redirect to change password
        context.$router.replace("/recover/password")

      }).catch(function (error) {
        try {
          if (error.response.data.message.includes(context.otpMessage)) {

            // otp is expired or doesn't match
            context.showToast(context.toastSeverityError, error.response.data.message, context.toastDefaultLife)

          } else {

            // unknown error
            context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

          }
        } catch (e) {

          // server error
          context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

        }
      })
    },
    resend() {

      const context = this

      // todo: throttle via backend
      if (this.canResend) {

        const context = this

        // login api
        let url = `${context.apiUrl}/recover/email/otp`
        let data = {
          email: this.email
        }
        axios.post(url, data).then(function (response) {

          // show toast
          context.showToast(context.toastSeveritySuccess, response.data.message, context.toastDefaultLife)


        }).catch(function (error) {
          try {

            if (error.response.data.message.includes(context.notFoundMessage)) {

              // email not found
              context.showToast(context.toastSeverityError, context.emailNotFoundMessage, context.toastDefaultLife)
              context.$router.push('/recover/email')

            } else {

              // unknown error
              context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

            }

          } catch (e) {

            // server error
            context.$router.replace('/error')
            context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

          }
        })

        // disable resend
        if (this.resendWaitTime !== 0) {
          let interval = setInterval(() => {
            this.resendWaitTime--
            if (this.resendWaitTime <= 0) {
              this.canResend = true
              this.resendWaitTime = 30
              clearInterval(interval)
            }
          }, 1000)
        }

        this.canResend = false

      } else {

        // show toast is not ready
        context.showToast(context.toastSeverityError, `Resend otp is unavailable until, ${this.resendWaitTime}s`, context.toastDefaultLife)

      }

    }
  }
}
</script>

<style scoped>
.input-otp {
  text-align: center;
  width: 15%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
