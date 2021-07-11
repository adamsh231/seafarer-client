<template>
  <Default>
    <template v-slot:title>
      <div class="p-text-bold text-white p-mt-3 p-ml-4" style="font-size: 30px">Verification Code</div>
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
          <DefaultButton id="submit-verify-otp" label="Submit" style="width: 95%" to="/sign-in"/>
        </div>
      </div>
      <div class="p-grid p-mt-3">
        <div class="p-col">
          <div class="p-text-center text-gray p-text-light">Not received code?</div>
        </div>
        <div class="p-col-5 p-offset-1">
          <div class="text-white p-text-right p-text-bold p-mr-3" style="cursor:pointer;">Resend</div>
        </div>
      </div>
    </template>
  </Default>
</template>

<script>
import Default from "../components/Default";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "Verify",
  components: {
    Default,
    DefaultButton
  },
  data() {
    return {
      otp: []
    }
  },
  methods: {
    validateAndNext(id, event) {
      let currentInput = document.getElementById(event.target.id)
      let nextInput = ""
      if (event.target.nextSibling !== null) {
        nextInput = document.getElementById(event.target.nextSibling.id)
        if (isNaN(currentInput.value)) {
          currentInput.value = ""
        } else if (currentInput.value !== "") {
          this.otp[id] = currentInput.value
          nextInput.focus()
        }
      }else{
        currentInput.blur()
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
