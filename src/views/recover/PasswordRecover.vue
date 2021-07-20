<template>

  <Default>
    <template v-slot:title>
      <BackButton to="/dashboard"/>
      <div class="p-text-center p-text-light text-white" style="font-size: 30px">New Password</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="new-password" class="input-text" type="text"/>
              <label for="new-password">New Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="confirm-new-password" class="input-text" type="text"/>
              <label for="confirm-new-password">Confirm New Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Update" to="/sign-in"/>
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
  name: "PasswordRecover",
  components: {
    Default,
    BackButton,
    DefaultButton
  }
}
</script>
