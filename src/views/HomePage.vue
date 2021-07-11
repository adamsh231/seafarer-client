<template>

  <Default>
    <template v-slot:title>
      <div class="p-text-center p-text-light text-white p-mt-4" style="font-size: 30px">Welcome to</div>
      <div class="p-text-center p-text-bold text-white p-mt-2" style="font-size: 28px">seafarindo.online</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-3" label="Sign In" to="/sign-in"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2" label="Sign Up" color="#a5e0f3" to="/sign-up"/>
          </div>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../components/Default";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "HomePage",
  components: {
    Default,
    DefaultButton
  }
}
</script>
