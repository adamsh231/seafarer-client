<template>

  <Default>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12">
          <div class="p-text-center p-text-bold text-white p-mt-4" style="font-size: 40px">Server Error</div>
          <div class="p-text-center p-text-bold text-white p-mt-4" style="font-size: 40px">500</div>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../components/Default";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "Error",
  components: {
    Default,
    DefaultButton
  }
}
</script>
