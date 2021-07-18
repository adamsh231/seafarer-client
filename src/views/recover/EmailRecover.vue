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
              <InputText id="email" class="input-text" type="email"/>
              <label for="email">Email</label>
            </span>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Recover"/>
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

export default {
  name: "EmailRecover",
  components: {
    Default,
    BackButton,
    DefaultButton
  }
}
</script>

<style scoped>

</style>
