<template>

  <Default>
    <template v-slot:title>
      <div class="p-text-light text-white p-mt-4 p-ml-4 p-text-light" style="font-size: 20px">
        Hi, <span class="text-white p-text-normal">UserName</span>
      </div>
      <div class="p-text-light p-text-bold text-white p-mt-3 p-ml-4" style="font-size: 18px">Please, complete your :</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-3 p-button-info" label="Application For Employment" to="/dashboard"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-info" label="Documents" to="/dashboard"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-success" label="Status" to="/dashboard"/>
          </div>
        </div>
        <div class="p-col-12">
          <hr class="text-white  p-mx-4"/>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-danger" label="Sign Out" to="/sign-in"/>
          </div>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../../components/Default";
import DefaultButton from "../../components/DefaultButton";

export default {
  name: "MainMenu",
  components: {
    Default,
    DefaultButton
  },
  created() {
    this.tokenOnlyArea()
  }
}
</script>
